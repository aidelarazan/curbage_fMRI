var jsPsychHtmlSliderKeyboardResponse = (function (jspsych) {
  'use strict';

  const info = {
    name: "html-slider-keyboard-response",
    parameters: {
      stimulus: {
        type: jspsych.ParameterType.HTML_STRING,
        pretty_name: "Stimulus",
        default: undefined,
      },
      min: {
        type: jspsych.ParameterType.INT,
        pretty_name: "Min slider",
        default: 0,
      },
      max: {
        type: jspsych.ParameterType.INT,
        pretty_name: "Max slider",
        default: 100,
      },
      slider_start: {
        type: jspsych.ParameterType.INT,
        pretty_name: "Slider starting value",
        default: 50,
      },
      step: {
        type: jspsych.ParameterType.INT,
        pretty_name: "Step",
        default: 1,
      },
      labels: {
        type: jspsych.ParameterType.HTML_STRING,
        pretty_name: "Labels",
        default: [],
        array: true,
      },
      slider_width: {
        type: jspsych.ParameterType.INT,
        pretty_name: "Slider width",
        default: null,
      },
      button_label: {
        type: jspsych.ParameterType.STRING,
        pretty_name: "Button label",
        default: "Continue",
        array: false,
      },
      require_movement: {
        type: jspsych.ParameterType.BOOL,
        pretty_name: "Require movement",
        default: false,
      },
      prompt: {
        type: jspsych.ParameterType.HTML_STRING,
        pretty_name: "Prompt",
        default: null,
      },
      stimulus_duration: {
        type: jspsych.ParameterType.INT,
        pretty_name: "Stimulus duration",
        default: null,
      },
      trial_duration: {
        type: jspsych.ParameterType.INT,
        pretty_name: "Trial duration",
        default: null,
      },
      response_ends_trial: {
        type: jspsych.ParameterType.BOOL,
        pretty_name: "Response ends trial",
        default: true,
      },
    },
  };

  class HtmlSliderKeyboardResponsePlugin {
    constructor(jsPsych) {
      this.jsPsych = jsPsych;
    }

    trial(display_element, trial) {
      var half_thumb_width = 7.5;
      var html = '<div id="jspsych-html-slider-keyboard-response-wrapper" style="margin: 100px 0px;">';
      html += '<div id="jspsych-html-slider-keyboard-response-stimulus">' + trial.stimulus + "</div>";
      html += '<div class="jspsych-html-slider-keyboard-response-container" style="position:relative; margin: 0 auto 3em auto; ';
      if (trial.slider_width !== null) {
        html += "width:" + trial.slider_width + "px;";
      } else {
        html += "width:auto;";
      }
      html += '">';
      html += '<input type="range" class="jspsych-slider" value="' + trial.slider_start + '" min="' + trial.min + '" max="' + trial.max + '" step="' + trial.step + '" id="jspsych-html-slider-keyboard-response-response"></input>';
      html += "<div>";
      for (var j = 0; j < trial.labels.length; j++) {
        var label_width_perc = 100 / (trial.labels.length - 1);
        var percent_of_range = j * (100 / (trial.labels.length - 1));
        var percent_dist_from_center = ((percent_of_range - 50) / 50) * 100;
        var offset = (percent_dist_from_center * half_thumb_width) / 100;
        html += '<div style="border: 1px solid transparent; display: inline-block; position: absolute; ' + "left:calc(" + percent_of_range + "% - (" + label_width_perc + "% / 2) - " + offset + "px); text-align: center; width: " + label_width_perc + '%;">';
        html += '<span style="text-align: center; font-size: 80%;">' + trial.labels[j] + "</span>";
        html += "</div>";
      }
      html += "</div>";
      html += "</div>";
      html += "</div>";
      if (trial.prompt !== null) {
        html += trial.prompt;
      }
    //   html += '<button id="jspsych-html-slider-keyboard-response-next" class="jspsych-btn" ' + (trial.require_movement ? "disabled" : "") + ">" + trial.button_label + "</button>";

      display_element.innerHTML = html;

      var response = {
        rt: null,
        response: null,
      };

      var current_value = trial.slider_start;
      var slider = display_element.querySelector("#jspsych-html-slider-keyboard-response-response");

      const updateSlider = (value) => {
        slider.value = value;
        if (trial.require_movement) {
          display_element.querySelector("#jspsych-html-slider-keyboard-response-next").disabled = false;
        }
      };

      const handleKeydown = (event) => {
        if (event.key === 'g') {
          current_value = Math.max(trial.min, current_value - trial.step);
          updateSlider(current_value);
        } else if (event.key === 'y') {
          current_value = Math.min(trial.max, current_value + trial.step);
          updateSlider(current_value);
        } else if (event.key === 'b') {
          var endTime = performance.now();
          response.rt = Math.round(endTime - startTime);
          response.response = current_value;
          if (trial.response_ends_trial) {
            end_trial();
          } else {
            display_element.querySelector("#jspsych-html-slider-keyboard-response-next").disabled = true;
          }
        }
      };

      document.addEventListener('keydown', handleKeydown);

      const end_trial = () => {
        document.removeEventListener('keydown', handleKeydown);
        this.jsPsych.pluginAPI.clearAllTimeouts();
        var trialdata = {
          rt: response.rt,
          stimulus: trial.stimulus,
          slider_start: trial.slider_start,
          response: response.response,
        };
        display_element.innerHTML = "";
        this.jsPsych.finishTrial(trialdata);
      };

    //   display_element.querySelector("#jspsych-html-slider-keyboard-response-next").addEventListener("click", () => {
    //     var endTime = performance.now();
    //     response.rt = Math.round(endTime - startTime);
    //     response.response = current_value;
    //     if (trial.response_ends_trial) {
    //       end_trial();
    //     } else {
    //       display_element.querySelector("#jspsych-html-slider-keyboard-response-next").disabled = true;
    //     }
    //   });

      if (trial.stimulus_duration !== null) {
        this.jsPsych.pluginAPI.setTimeout(() => {
          display_element.querySelector("#jspsych-html-slider-keyboard-response-stimulus").style.visibility = "hidden";
        }, trial.stimulus_duration);
      }

      if (trial.trial_duration !== null) {
        this.jsPsych.pluginAPI.setTimeout(end_trial, trial.trial_duration);
      }

      var startTime = performance.now();
    }

    simulate(trial, simulation_mode, simulation_options, load_callback) {
      if (simulation_mode == "data-only") {
        load_callback();
        this.simulate_data_only(trial, simulation_options);
      }
      if (simulation_mode == "visual") {
        this.simulate_visual(trial, simulation_options, load_callback);
      }
    }

    create_simulation_data(trial, simulation_options) {
      const default_data = {
        stimulus: trial.stimulus,
        slider_start: trial.slider_start,
        response: this.jsPsych.randomization.randomInt(trial.min, trial.max),
        rt: this.jsPsych.randomization.sampleExGaussian(500, 50, 1 / 150, true),
      };
      const data = this.jsPsych.pluginAPI.mergeSimulationData(default_data, simulation_options);
      this.jsPsych.pluginAPI.ensureSimulationDataConsistency(trial, data);
      return data;
    }

    simulate_data_only(trial, simulation_options) {
      const data = this.create_simulation_data(trial, simulation_options);
      this.jsPsych.finishTrial(data);
    }

    simulate_visual(trial, simulation_options, load_callback) {
      const data = this.create_simulation_data(trial, simulation_options);
      const display_element = this.jsPsych.getDisplayElement();
      this.trial(display_element, trial);
      load_callback();
      if (data.rt !== null) {
        const el = display_element.querySelector("input[type='range']");
        setTimeout(() => {
          this.jsPsych.pluginAPI.clickTarget(el);
          el.valueAsNumber = data.response;
        }, data.rt / 2);
        this.jsPsych.pluginAPI.clickTarget(display_element.querySelector("button"), data.rt);
      }
    }
  }

  HtmlSliderKeyboardResponsePlugin.info = info;

  return HtmlSliderKeyboardResponsePlugin;
})(jsPsychModule);
