import Vue from 'vue';
import './index.css';
import Vivus from 'vivus';

const root = window.document.body;

export default function svg () {
  const wrap = window.document.createElement('div');
  const div = window.document.createElement('div');

  root.appendChild(wrap);
  wrap.appendChild(div);

  return new Vue({
    el: div,
    data: {
      timer: null
    },
    clear() {
      clearInterval(this.timer);
      root.removeChild(wrap);
    },
    mounted() {
      const vivus = new Vivus('my-svg');
      this.timer = setInterval(function () {
        vivus.stop()
          .reset()
          .play(2);
      }, 5000);
    },
    template: `
      <div class="svg">
            <svg version="1.1" id="my-svg"  width="960px" height="560px" viewBox="0 0 350 50" enable-background="new 0 0 960 50" xml:space="preserve">
                <path fill="none" data-duration="10" stroke="#ddd" stroke-width="4" d="M0,14.203h13.835L19.82,37.71l7.575-23.507h12.93l7.896,23.566l6.021-23.566h13.75L54.238,51.539H41.505l-7.562-22.465
                  l-7.309,22.465H13.843L0,14.203z"/>
                <path fill="none" data-duration="10" stroke="#ddd" stroke-width="4" d="M112.781,36.422H84.093c0.258,2.297,0.879,4.008,1.863,5.133c1.383,1.617,3.187,2.426,5.414,2.426
                  c1.406,0,2.742-0.352,4.008-1.055c0.773-0.445,1.605-1.23,2.496-2.355l14.098,1.301c-2.157,3.75-4.758,6.439-7.805,8.068
                  s-7.418,2.443-13.113,2.443c-4.945,0-8.836-0.698-11.672-2.092s-5.186-3.609-7.049-6.645c-1.863-3.035-2.795-6.604-2.795-10.705
                  c0-5.836,1.869-10.559,5.607-14.168c3.738-3.609,8.9-5.414,15.486-5.414c5.344,0,9.562,0.809,12.656,2.426
                  c3.094,1.617,5.449,3.961,7.066,7.031c1.617,3.071,2.426,7.066,2.426,11.988v1.618H112.781z M98.226,29.566
                  c-0.281-2.765-1.025-4.746-2.232-5.941c-1.208-1.195-2.795-1.793-4.764-1.793c-2.273,0-4.09,0.902-5.449,2.707
                  c-0.867,1.125-1.418,2.801-1.652,5.027H98.226z"/>
                <path fill="none" data-duration="10" stroke="#ddd" stroke-width="4" d="M118.722,0h14.449v17.859c1.429-1.5,3.053-2.625,4.869-3.375s3.826-1.125,6.029-1.125c4.547,0,8.309,1.635,11.285,4.904
                  c2.976,3.27,4.465,7.963,4.465,14.08c0,4.078-0.68,7.67-2.039,10.775c-1.359,3.106-3.24,5.426-5.643,6.961
                  c-2.403,1.535-5.068,2.303-7.999,2.303c-2.508,0-4.805-0.54-6.891-1.617c-1.57-0.844-3.282-2.426-5.133-4.746v5.52H118.72V0H118.722
                  z M133.066,32.766c0,3.211,0.603,5.537,1.811,6.979c1.207,1.441,2.736,2.162,4.588,2.162c1.71,0,3.146-0.708,4.307-2.127
                  c1.16-1.418,1.74-3.802,1.74-7.154c0-2.953-0.568-5.121-1.705-6.504c-1.137-1.383-2.514-2.074-4.131-2.074
                  c-1.946,0-3.533,0.721-4.764,2.162C133.681,27.651,133.066,29.836,133.066,32.766z"/>
                <path fill="none" data-duration="10" stroke="#ddd" stroke-width="4" d="M194.519,36.914l13.604,1.547c-0.75,2.836-1.98,5.291-3.69,7.365c-1.711,2.074-3.897,3.686-6.558,4.834
                  c-2.659,1.148-6.042,1.723-10.143,1.723c-3.961,0-7.26-0.369-9.896-1.106c-2.637-0.737-4.904-1.931-6.804-3.583
                  c-1.897-1.651-3.387-3.588-4.465-5.813c-1.078-2.225-1.617-5.175-1.617-8.852c0-3.84,0.656-7.037,1.969-9.589
                  c0.962-1.873,2.273-3.553,3.938-5.04c1.664-1.487,3.375-2.593,5.133-3.319c2.789-1.147,6.363-1.721,10.723-1.721
                  c6.095,0,10.74,1.09,13.939,3.27c3.199,2.18,5.443,5.367,6.732,9.562l-13.466,1.793c-0.422-1.594-1.189-2.795-2.303-3.604
                  c-1.113-0.809-2.606-1.213-4.481-1.213c-2.368,0-4.284,0.848-5.748,2.544c-1.465,1.696-2.197,4.264-2.197,7.703
                  c0,3.065,0.726,5.393,2.18,6.983c1.453,1.591,3.306,2.386,5.556,2.386c1.875,0,3.45-0.48,4.729-1.441
                  C192.931,40.383,193.886,38.906,194.519,36.914z"/>
                <path fill="none" data-duration="10" stroke="#ddd" stroke-width="4" d="M213.468,0h14.309v18.984c1.945-2.016,3.879-3.457,5.801-4.324c1.922-0.867,4.195-1.301,6.82-1.301
                  c3.891,0,6.955,1.184,9.193,3.551c2.237,2.368,3.356,6,3.356,10.898v23.731h-14.379V31.008c0-2.343-0.434-4.002-1.301-4.975
                  c-0.867-0.972-2.086-1.459-3.656-1.459c-1.734,0-3.141,0.656-4.219,1.969s-1.617,3.668-1.617,7.066v17.93h-14.309L213.468,0
                  L213.468,0z"/>
                <path fill="none" data-duration="10" stroke="#ddd" stroke-width="4" d="M274.535,26.297l-13.676-1.442c0.516-2.391,1.26-4.271,2.232-5.643c0.972-1.372,2.373-2.561,4.2-3.568
                  c1.312-0.726,3.117-1.289,5.414-1.688c2.297-0.398,4.781-0.598,7.453-0.598c4.289,0,7.734,0.241,10.336,0.721
                  c2.603,0.48,4.771,1.482,6.504,3.006c1.22,1.055,2.181,2.549,2.884,4.482c0.702,1.933,1.055,3.779,1.055,5.537v16.488
                  c0,1.758,0.111,3.135,0.334,4.131c0.223,0.997,0.709,2.268,1.459,3.814H289.3c-0.539-0.961-0.892-1.693-1.056-2.197
                  c-0.164-0.504-0.328-1.295-0.492-2.373c-1.875,1.805-3.737,3.094-5.59,3.867c-2.53,1.031-5.473,1.547-8.823,1.547
                  c-4.453,0-7.834-1.031-10.144-3.094c-2.309-2.062-3.463-4.605-3.463-7.629c0-2.835,0.832-5.168,2.496-6.996s4.733-3.187,9.211-4.078
                  c5.367-1.078,8.848-1.833,10.44-2.268c1.595-0.434,3.281-1.002,5.062-1.705c0-1.758-0.363-2.988-1.09-3.691
                  c-0.728-0.703-2.004-1.055-3.832-1.055c-2.344,0-4.103,0.375-5.273,1.125C275.835,23.578,275.097,24.68,274.535,26.297z
                   M286.945,33.82c-1.969,0.703-4.02,1.324-6.152,1.863c-2.905,0.773-4.745,1.535-5.52,2.285c-0.797,0.773-1.195,1.652-1.195,2.637
                  c0,1.125,0.394,2.045,1.178,2.76c0.785,0.715,1.939,1.072,3.464,1.072c1.594,0,3.075-0.387,4.446-1.16
                  c1.371-0.773,2.345-1.717,2.918-2.83c0.574-1.113,0.861-2.561,0.861-4.342V33.82L286.945,33.82z"/>
                <path fill="none" data-duration="10" stroke="#ddd" stroke-width="4" d="M325.546,0v14.203h7.875V24.68h-7.875v13.228c0,1.591,0.152,2.644,0.457,3.157c0.47,0.796,1.289,1.193,2.461,1.193
                  c1.056,0,2.531-0.304,4.431-0.913l1.055,9.877c-3.539,0.773-6.844,1.16-9.914,1.16c-3.562,0-6.188-0.457-7.875-1.37
                  c-1.688-0.913-2.936-2.299-3.744-4.16s-1.213-4.875-1.213-9.042V24.678h-5.272V14.201h5.272V7.346L325.546,0z"/>
            </svg>
        </div>
    `
  });
}


