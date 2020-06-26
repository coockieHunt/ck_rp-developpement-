import ReactDOM from 'react-dom'
import React, { useState } from 'react';

import '../../css/main.scss'

// CONFIG
const SVG = {
    "warning" : {viewBox : "0 0 489.418 489.418", svg : '<path d="M244.709,389.496c18.736,0,34.332-14.355,35.91-33.026l24.359-290.927c1.418-16.873-4.303-33.553-15.756-46.011 C277.783,7.09,261.629,0,244.709,0s-33.074,7.09-44.514,19.532C188.74,31.99,183.022,48.67,184.44,65.543l24.359,290.927 C210.377,375.141,225.973,389.496,244.709,389.496z"/> <path d="M244.709,410.908c-21.684,0-39.256,17.571-39.256,39.256c0,21.683,17.572,39.254,39.256,39.254 s39.256-17.571,39.256-39.254C283.965,428.479,266.393,410.908,244.709,410.908z"/>'},
    "ok" : {viewBox : "0 -46 417.81333 417", svg : '<path d="m159.988281 318.582031c-3.988281 4.011719-9.429687 6.25-15.082031 6.25s-11.09375-2.238281-15.082031-6.25l-120.449219-120.46875c-12.5-12.5-12.5-32.769531 0-45.246093l15.082031-15.085938c12.503907-12.5 32.75-12.5 45.25 0l75.199219 75.203125 203.199219-203.203125c12.503906-12.5 32.769531-12.5 45.25 0l15.082031 15.085938c12.5 12.5 12.5 32.765624 0 45.246093zm0 0"/>'},
    "info" : {viewBox : "-90 0 512 512.00002", svg : '<path d="m123.113281 437.585938h85.046875v74.414062h-85.046875zm0 0"/><path d="m331.273438 165.636719c0-91.480469-74.15625-165.636719-165.636719-165.636719s-165.636719 74.15625-165.636719 165.636719h84.980469c0-44.476563 36.179687-80.65625 80.65625-80.65625 44.476562 0 80.660156 36.179687 80.660156 80.65625 0 44.476562-36.183594 80.660156-80.660156 80.660156h-42.523438v161.261719h85.046875v-81.804688c70.871094-18.773437 123.113282-83.339844 123.113282-160.117187zm0 0"/>'},
    "error" : {viewBox : "0 0 311 311.07733", svg : '<path d="m16.035156 311.078125c-4.097656 0-8.195312-1.558594-11.308594-4.695313-6.25-6.25-6.25-16.382812 0-22.632812l279.0625-279.0625c6.25-6.25 16.382813-6.25 22.632813 0s6.25 16.382812 0 22.636719l-279.058594 279.058593c-3.136719 3.117188-7.234375 4.695313-11.328125 4.695313zm0 0"/><path d="m295.117188 311.078125c-4.097657 0-8.191407-1.558594-11.308594-4.695313l-279.082032-279.058593c-6.25-6.253907-6.25-16.386719 0-22.636719s16.382813-6.25 22.636719 0l279.058594 279.0625c6.25 6.25 6.25 16.382812 0 22.632812-3.136719 3.117188-7.230469 4.695313-11.304687 4.695313zm0 0"/>'},
    "armor" : {viewBox : "0 0 511.958 511.958", svg : '<path d="M400.477,511.958V331.953c0-8.268,3.367-15.772,8.798-21.203c5.428-5.429,12.93-8.797,21.202-8.797h64.002v-52.99h-0.047   c-0.005-5.082-2.6-10.034-7.278-12.832c-27.529-16.484-41.176-50.883-41.176-84.168c0-28.54,10.938-52.76,27.317-71.845   c14.371-16.746,6.293-42.764-15.01-48.458L341.676,0.495l-0.003,0.012c-6.604-1.771-13.787,1.184-17.106,7.488   C303.68,47.654,253.543,61.613,215.32,38.64c-11.852-7.123-21.649-17.311-28.322-29.469c-2.954-6.587-10.33-10.249-17.53-8.325   L54.173,31.66c-21.304,5.693-29.381,31.712-15.01,48.458c37.6,43.815,38.193,123.841-13.434,155.965   c-4.893,2.47-8.249,7.542-8.249,13.398v52.473h64c8.271,0,15.773,3.368,21.202,8.797c5.43,5.431,8.798,12.935,8.798,21.203v180.005   H400.477z M156.515,301.957h198.964c8.284,0,15,6.716,15,15c0,8.284-6.716,15-15,15H156.515c-8.284,0-15-6.716-15-15   C141.515,308.672,148.231,301.957,156.515,301.957z M156.515,361.957h198.964c8.284,0,15,6.716,15,15c0,8.284-6.716,15-15,15   H156.515c-8.284,0-15-6.716-15-15C141.515,368.673,148.231,361.957,156.515,361.957z M156.515,421.957h198.964   c8.284,0,15,6.716,15,15c0,8.284-6.716,15-15,15H156.515c-8.284,0-15-6.716-15-15C141.515,428.673,148.231,421.957,156.515,421.957   z"/><polygon points="430.477,331.953 430.479,331.954 430.479,331.954  "/><path d="M81.479,331.955c0.003-0.001,0.005-0.002,0-0.002l-0.004,0.003l-0.005,0.005c0.002,0.002,0.004-0.002,0.004-0.005l0,0   l0.002-0.002c0.002-0.005,0.001-0.004,0-0.001H17.479v165.005c0,8.284,6.716,15,15,15h49V331.955z"/><path d="M430.48,331.956l0.006,0.006C430.484,331.964,430.482,331.961,430.48,331.956L430.48,331.956l-0.001-0.001   c-0.001,0-0.003,0.001-0.001,0.001v180.003h49.002c8.284,0,15-6.716,15-15V331.954h-64L430.48,331.956z"/>'},
    "heart" : {viewBox : "0 0 511.958 511.958", svg : '<path d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"/>'},
    "dollar" : {viewBox : "0 0 384 384", svg : '<path d="M200.373,168.533L200.373,168.533c-48.427-12.587-64-25.493-64-45.76c0-23.253,21.44-39.573,57.6-39.573            c37.973,0,52.053,18.133,53.333,44.8h47.147c-1.387-36.8-23.893-70.293-68.48-81.28V0h-64v46.08            c-41.387,9.067-74.667,35.733-74.667,77.013c0,49.28,40.853,73.813,100.267,88.107c53.44,12.8,64,31.467,64,51.52            c0,14.613-10.347,38.08-57.6,38.08c-43.947,0-61.333-19.733-63.573-44.8H83.36c2.667,46.72,37.547,72.853,78.613,81.707V384h64            v-45.867c41.493-8,74.667-32,74.667-75.84C300.64,201.92,248.8,181.227,200.373,168.533z"/>'},
    "bank" : {viewBox : "0 0 424.98 424.98", svg : '<path d="M241.395,282.304c-1.587-1.738-3.595-3.038-5.67-4.121c-4.518-2.356-9.459-3.785-14.365-5.075v38.016                c7.963-0.9,17.105-3.79,21.286-11.224l0,0c1.996-3.551,2.393-7.914,1.58-11.867C243.785,285.891,242.874,283.925,241.395,282.304                z"/>        </g>        <g>            <path d="M242.604,299.973c0.016-0.027,0.025-0.044,0.042-0.073l0,0C242.632,299.924,242.618,299.948,242.604,299.973z"/>        </g>        <g>            <path d="M184.009,221.532c-1.369,1.999-2.228,4.27-2.465,6.684c-0.237,2.419-0.104,5.11,0.815,7.387                c0.875,2.17,2.708,3.772,4.6,5.062c2.123,1.444,4.458,2.572,6.836,3.528c1.995,0.803,4.239,1.571,6.658,2.313v-34.4                C194.342,213.41,187.665,216.194,184.009,221.532z"/>        </g>        <g>            <path d="M242.804,299.619c-0.05,0.089-0.104,0.182-0.157,0.28l0,0C242.709,299.785,242.758,299.701,242.804,299.619z"/>        </g>        <g>            <path d="M243.004,299.263C243.017,299.239,243.019,299.237,243.004,299.263L243.004,299.263z"/>        </g>        <g>            <path d="M234.753,92.469c32.329-27.158,53.931-88.341,40.637-91.017c-17.664-3.557-56.022,12.04-74.562,14.788                c-26.296,3.175-54.936-28.515-71.012-10.851c-13.071,14.362,9.371,66.592,44.482,89.346                C69.546,146.219-77.69,404.673,179.171,423.426C534.582,449.375,356.615,142.639,234.753,92.469z M265.276,296.298                c-1.093,10.076-6.433,19.188-14.415,25.374c-8.428,6.532-18.999,9.57-29.502,10.421v11.133c0,2.979-1.301,5.86-3.531,7.832                c-3.065,2.712-7.569,3.381-11.289,1.667c-3.673-1.69-6.086-5.457-6.086-9.499v-12.168c-1.801-0.342-3.589-0.749-5.356-1.234                c-9.816-2.697-18.921-7.954-25.572-15.732c-3.313-3.877-6.014-8.276-7.882-13.025c-0.488-1.241-0.923-2.505-1.304-3.783                c-0.345-1.157-0.701-2.333-0.824-3.539c-0.207-2.023,0.194-4.087,1.137-5.889c1.938-3.707,6.022-5.946,10.192-5.574                c4.104,0.364,7.701,3.212,8.993,7.124c0.398,1.205,0.668,2.44,1.115,3.632c0.443,1.184,0.978,2.335,1.607,3.431                c1.242,2.158,2.798,4.148,4.59,5.875c3.694,3.559,8.399,5.872,13.304,7.248v-41.362c-9.591-2.483-19.491-5.69-27.411-11.848                c-3.849-2.994-7.115-6.714-9.254-11.117c-2.257-4.647-3.192-9.824-3.23-14.966c-0.039-5.221,0.953-10.396,3.131-15.153                c2.04-4.454,4.977-8.453,8.578-11.768c7.7-7.087,17.928-11.04,28.187-12.492v-0.91v-10.647c0-2.978,1.301-5.86,3.531-7.832                c3.066-2.711,7.568-3.381,11.289-1.667c3.672,1.691,6.086,5.457,6.086,9.499v10.647v0.847c1.367,0.172,2.73,0.378,4.086,0.624                c10.074,1.823,19.927,5.983,27.294,13.246c3.49,3.44,6.347,7.539,8.356,12.009c0.561,1.247,1.052,2.523,1.477,3.824                c0.396,1.213,0.794,2.462,0.983,3.728c0.302,2.021-0.006,4.109-0.871,5.958c-1.772,3.788-5.746,6.2-9.927,6.021                c-4.108-0.179-7.83-2.854-9.301-6.694c-0.438-1.142-0.657-2.351-1.104-3.49c-0.451-1.153-1.035-2.253-1.708-3.292                c-1.308-2.02-3.003-3.752-4.938-5.179c-4.19-3.094-9.272-4.706-14.35-5.607v39.582c6.035,1.445,12.075,3.021,17.857,5.301                c8.739,3.446,17.02,8.73,21.79,17.062c-0.74-1.298-1.46-2.563,0.025,0.043c1.458,2.56,0.762,1.34,0.03,0.057                C264.854,280.704,266.101,288.701,265.276,296.298z"/>        </g>        <g>            <path d="M242.493,300.169c-0.061,0.109-0.114,0.205-0.156,0.278C242.373,300.384,242.427,300.289,242.493,300.169z"/>'},
    "food" : {viewBox : "0 0 512 512", svg : ' <path d="M498.682,435.326L297.917,234.56L63.357,0H45.026l-3.743,9.511c-9.879,25.104-14.1,50.78-12.205,74.249                    c2.16,26.752,12.323,49.913,29.392,66.982L241.58,333.852l24.152-24.152l169.285,189.293c16.84,16.84,45.825,17.84,63.665,0                    C516.236,481.439,516.236,452.879,498.682,435.326z"/>            </g>        </g>        <g>            <g>                <path d="M156.728,291.442L13.317,434.853c-17.552,17.552-17.552,46.113,0,63.665c16.674,16.674,45.519,18.146,63.665,0                    l143.412-143.412L156.728,291.442z"/>            </g>        </g>        <g>            <g>                <path d="M490.253,85.249l-81.351,81.35l-21.223-21.222l81.351-81.351l-21.222-21.222l-81.35,81.35l-21.222-21.222l81.351-81.35                    L405.366,0.361L299.256,106.471c-12.981,12.981-20.732,30.217-21.828,48.535c-0.277,4.641-1.329,9.206-3.074,13.548l68.929,68.929                    c4.342-1.747,8.908-2.798,13.548-3.075c18.318-1.093,35.554-8.846,48.535-21.827l106.11-106.109L490.253,85.249z"/>'},
    "thirst" : {viewBox : "0 0 248.151 248.151", svg : ' <path d="M134.475,8.551c-6.8-11.6-14-11.2-20.8,0c-31.2,46.4-78.4,116-78.4,150.8c0,24.4,10,46.8,26,62.8s38.4,26,62.8,26                    c24.4,0,46.8-10,62.8-26s26-38.4,26-62.8C212.875,124.151,165.675,54.951,134.475,8.551z M188.075,198.951                    c-6.4,10.4-15.6,19.6-26.8,26c-5.2,2.8-11.6,1.2-14.4-4c-3.2-5.6-1.2-12,4-14.8c8-4.4,14.4-10.8,19.2-18.4                    c4.8-7.6,7.6-16.4,8-25.6c0.4-6,5.2-10.4,11.2-10c6,0.4,10.4,5.2,10,11.2C198.475,176.151,194.475,188.151,188.075,198.951z"/> '},
    "save" : {viewBox : "0 0 469.333 469.333", svg : ' <path d="M466.208,88.458L380.875,3.125c-2-2-4.708-3.125-7.542-3.125H42.667C19.146,0,0,19.135,0,42.667v384                        c0,23.531,19.146,42.667,42.667,42.667h384c23.521,0,42.667-19.135,42.667-42.667V96                        C469.333,93.167,468.208,90.458,466.208,88.458z M106.667,21.333h234.667v128c0,11.76-9.563,21.333-21.333,21.333H128                        c-11.771,0-21.333-9.573-21.333-21.333V21.333z M384,448H85.333V256H384V448z M448,426.667c0,11.76-9.563,21.333-21.333,21.333                        h-21.333V245.333c0-5.896-4.771-10.667-10.667-10.667h-320c-5.896,0-10.667,4.771-10.667,10.667V448H42.667                        c-11.771,0-21.333-9.573-21.333-21.333v-384c0-11.76,9.563-21.333,21.333-21.333h42.667v128C85.333,172.865,104.479,192,128,192                        h192c23.521,0,42.667-19.135,42.667-42.667v-128h6.25L448,100.417V426.667z"/>                    <path d="M266.667,149.333h42.667c5.896,0,10.667-4.771,10.667-10.667V53.333c0-5.896-4.771-10.667-10.667-10.667h-42.667                        c-5.896,0-10.667,4.771-10.667,10.667v85.333C256,144.562,260.771,149.333,266.667,149.333z M277.333,64h21.333v64h-21.333V64z"                        />    '},
    "men" : {viewBox : "0 0 384 384", svg : ' <path d="m383.792969 13.9375c-.175781-1.378906-.480469-2.707031-.984375-3.953125-.015625-.03125-.015625-.074219-.023438-.113281 0-.007813-.007812-.015625-.015625-.023438-.554687-1.3125-1.3125-2.503906-2.167969-3.609375-.210937-.261719-.417968-.519531-.640624-.765625-.914063-1.03125-1.90625-1.984375-3.058594-2.761718-.03125-.023438-.070313-.03125-.101563-.054688-1.113281-.734375-2.34375-1.289062-3.632812-1.726562-.320313-.113282-.632813-.210938-.960938-.296876-1.351562-.367187-2.742187-.632812-4.207031-.632812h-112c-8.832031 0-16 7.167969-16 16s7.167969 16 16 16h73.367188l-95.496094 95.496094c-25.464844-20.367188-56.816406-31.496094-89.871094-31.496094-79.398438 0-144 64.601562-144 144s64.601562 144 144 144 144-64.601562 144-144c0-33.039062-11.121094-64.382812-31.503906-89.871094l95.503906-95.503906v73.375c0 8.832031 7.167969 16 16 16s16-7.167969 16-16v-112c0-.335938-.078125-.65625-.097656-.984375-.023438-.367187-.0625-.71875-.109375-1.078125zm-239.792969 338.0625c-61.761719 0-112-50.238281-112-112s50.238281-112 112-112c29.902344 0 58.054688 11.640625 79.222656 32.734375 21.136719 21.210937 32.777344 49.363281 32.777344 79.265625 0 61.761719-50.238281 112-112 112zm0 0"/>  '},
    "women" : {viewBox : "0 0 349.54 349.54", svg : ' <path d="M284.17,89.848c-1.414-7.138-3.531-14.119-6.32-20.84c-2.796-6.751-6.253-13.209-10.32-19.28			c-8.179-12.246-18.685-22.765-30.92-30.96c-12.105-8.131-25.699-13.787-40-16.64c-14.422-2.837-29.258-2.837-43.68,0			c-14.301,2.852-27.896,8.508-40,16.64c-12.231,8.183-22.737,18.689-30.92,30.92c-8.131,12.105-13.786,25.699-16.64,40			c-2.838,14.422-2.838,29.258,0,43.68c2.852,14.301,8.508,27.896,16.64,40c10.815,16.169,25.646,29.25,43.04,37.96			c10.548,5.397,21.891,9.07,33.6,10.88c2.335,0.211,4.095,2.217,4,4.56v31.6c0,2.43-1.97,4.4-4.4,4.4h-46.64			c-3.148,0.013-6.165,1.263-8.4,3.48c-4.484,4.545-4.625,11.805-0.32,16.52l0.24,0.2c1.149,1.111,2.509,1.982,4,2.56			c1.433,0.596,2.968,0.909,4.52,0.92h46.72c1.169-0.005,2.291,0.456,3.12,1.28c0.761,0.828,1.176,1.916,1.16,3.04v46.76			c-0.006,1.563,0.293,3.112,0.88,4.56c0.572,1.494,1.444,2.855,2.56,4c1.145,1.117,2.506,1.989,4,2.56			c2.91,1.189,6.17,1.189,9.08,0c1.494-0.572,2.855-1.444,4-2.56c1.116-1.145,1.988-2.506,2.56-4c0.587-1.448,0.886-2.997,0.88-4.56			v-46.76c-0.005-1.169,0.456-2.291,1.28-3.12c0.829-0.824,1.951-1.285,3.12-1.28h46.68c1.563,0.006,3.112-0.293,4.56-0.88			c1.494-0.572,2.855-1.443,4-2.56c1.116-1.145,1.988-2.506,2.56-4c1.189-2.91,1.189-6.17,0-9.08			c-0.312-0.758-0.701-1.482-1.16-2.16l-1.56-1.56c-2.235-2.217-5.252-3.467-8.4-3.48h-46.76c-1.169,0.005-2.291-0.456-3.12-1.28			c-0.824-0.829-1.285-1.951-1.28-3.12v-29.44v-2.04c0.002-1.059,0.385-2.081,1.08-2.88c0.691-0.786,1.643-1.297,2.68-1.44			c11.874-1.678,23.397-5.272,34.12-10.64c24.149-12.068,43.127-32.451,53.44-57.4c2.791-6.734,4.908-13.728,6.32-20.88			C287.008,119.106,287.008,104.269,284.17,89.848z M260.85,128.848v0.16c-9.803,47.805-56.504,78.612-104.309,68.809			c-47.805-9.803-78.612-56.504-68.809-104.309c9.803-47.805,56.504-78.612,104.309-68.809			c41.276,8.464,70.833,44.895,70.609,87.029C262.612,117.479,262.009,123.214,260.85,128.848z"/>'},
    "body" : {viewBox : "0 0 31.463 31.463", svg : ' <circle cx="15.698" cy="2.644" r="2.644"/>	<path d="M21.396,8.791c0,0,0.148-2.953-2.968-2.953h-5.403c-3.005,0-2.983,2.727-2.985,2.953l0.001,8.38		c0.049,0.452,0.495,0.967,1.049,0.967c0.551,0,0.956-0.499,1.006-0.952l0.938,13.346c0.069,0.679,0.549,0.932,1.139,0.932		c0.589,0,1.068-0.253,1.137-0.932h0.833c0.072,0.679,0.55,0.932,1.137,0.932c0.591,0,1.07-0.253,1.141-0.932l0.966-13.354		c0,0.453,0.438,0.963,0.992,0.963c0.552,0,0.993-0.517,1.042-0.969L21.396,8.791z"/>'},
    "head" : {viewBox : "0 0 35.002 35.002", svg : ' <path d="M35.002,27.727v3.826c0,1.383-1.119,2.5-2.5,2.5H2.5c-1.381,0-2.5-1.117-2.5-2.5v-3.826c0-1.095,0.711-2.061,1.755-2.387		l10.559-3.297c-2.283-2.716-3.668-7.025-3.668-11.055c0-6.099,3.477-10.039,8.855-10.039s8.854,3.94,8.854,10.039		c0,4.03-1.385,8.339-3.668,11.055l10.56,3.297C34.291,25.666,35.002,26.632,35.002,27.727z"/>'},
    "next" : {viewBox : "0 0 492.004 492.004", svg : ' <path d="M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136			c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002			v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864			c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872			l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z"/>'},
    "back" : {viewBox : "0 0 492 492", svg : ' 	<path d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124			c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844			L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412			c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008			c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788			C492,219.198,479.172,207.418,464.344,207.418z"/>'},
    "hammers" : {viewBox : "0 0 406.855 406.855", svg : '<g><path d="M395.79,298.067c-1.421-1.529-2.955-2.948-4.59-4.245l-161.04-138.4l16.56-17.68c1.909,0.275,3.832,0.435,5.76,0.48			c8.326,0.401,16.434-2.738,22.32-8.64c8-8.72,9.6-22.24,3.92-38.08c-6.12-15.811-15.813-29.994-28.32-41.44			c-29.52-27.76-65.04-36.32-80.72-19.6c-6.617,7.929-9,18.565-6.4,28.56l-77.12,82c-10.128-2.035-20.615,0.944-28.16,8			c-16,16.72-4.88,51.6,24.72,79.36c19.36,18.16,41.28,28.08,58.48,28.08c8.287,0.399,16.359-2.708,22.24-8.56			c6.617-7.929,9-18.565,6.4-28.56l16.56-17.44l148.8,152.48c15.551,16.732,41.721,17.688,58.453,2.137			S411.341,314.799,395.79,298.067z M181.04,41.423c8-8.64,34.64-1.76,58.16,20.32c10.747,9.641,19.124,21.632,24.48,35.04			c3.52,9.76,3.28,17.68-0.48,21.68c-5.76,4.092-13.209,4.966-19.76,2.32l-63.36-59.44C176.973,54.975,177.335,47.462,181.04,41.423			z M151.76,237.263c-8,8.64-34.64,1.76-58.16-20.32s-32-48-24-56.72c5.76-4.092,13.209-4.966,19.76-2.32l63.44,59.44			C155.898,223.721,155.505,231.242,151.76,237.263z M175.2,190.543l-12.8,13.76l-60.56-56.88l68.56-73.04l60.56,57.04l-34.32,36.64			L175.2,190.543z M382,341.503c-9.497,10.116-25.359,10.722-35.6,1.36l-148.96-152.56l21.84-23.28l161.6,138.64			C391.084,315.252,391.585,331.296,382,341.503z"/>	</g></g><g>	<g>		<path d="M155.78,325.248c-0.06,0.005-0.12,0.009-0.18,0.014h-0.4v-2.72c-0.474-8.81-7.989-15.574-16.8-15.12H33.68			c-8.75-0.363-16.166,6.375-16.64,15.12v2.72h-0.4c-8.452-0.73-15.895,5.529-16.626,13.98c-0.005,0.06-0.01,0.12-0.014,0.18v31.2			c0.587,8.463,7.924,14.847,16.387,14.26c0.085-0.006,0.169-0.012,0.253-0.02H155.6c8.452,0.727,15.893-5.535,16.62-13.987			c0.007-0.084,0.014-0.169,0.02-0.253v-31.2C171.609,330.963,164.239,324.617,155.78,325.248z M156.24,368.863H16v-27.6h9.04			c4.418,0,8-3.582,8-8v-9.84H139.2v9.76c0,4.418,3.582,8,8,8h9.04V368.863z"/>'},
    "other" : {viewBox : "0 0 512 512", svg : '<path d="m499.953125 197.703125-39.351563-8.554687c-3.421874-10.476563-7.660156-20.695313-12.664062-30.539063l21.785156-33.886719c3.890625-6.054687 3.035156-14.003906-2.050781-19.089844l-61.304687-61.304687c-5.085938-5.085937-13.035157-5.941406-19.089844-2.050781l-33.886719 21.785156c-9.84375-5.003906-20.0625-9.242188-30.539063-12.664062l-8.554687-39.351563c-1.527344-7.03125-7.753906-12.046875-14.949219-12.046875h-86.695312c-7.195313 0-13.421875 5.015625-14.949219 12.046875l-8.554687 39.351563c-10.476563 3.421874-20.695313 7.660156-30.539063 12.664062l-33.886719-21.785156c-6.054687-3.890625-14.003906-3.035156-19.089844 2.050781l-61.304687 61.304687c-5.085937 5.085938-5.941406 13.035157-2.050781 19.089844l21.785156 33.886719c-5.003906 9.84375-9.242188 20.0625-12.664062 30.539063l-39.351563 8.554687c-7.03125 1.53125-12.046875 7.753906-12.046875 14.949219v86.695312c0 7.195313 5.015625 13.417969 12.046875 14.949219l39.351563 8.554687c3.421874 10.476563 7.660156 20.695313 12.664062 30.539063l-21.785156 33.886719c-3.890625 6.054687-3.035156 14.003906 2.050781 19.089844l61.304687 61.304687c5.085938 5.085937 13.035157 5.941406 19.089844 2.050781l33.886719-21.785156c9.84375 5.003906 20.0625 9.242188 30.539063 12.664062l8.554687 39.351563c1.527344 7.03125 7.753906 12.046875 14.949219 12.046875h86.695312c7.195313 0 13.421875-5.015625 14.949219-12.046875l8.554687-39.351563c10.476563-3.421874 20.695313-7.660156 30.539063-12.664062l33.886719 21.785156c6.054687 3.890625 14.003906 3.039063 19.089844-2.050781l61.304687-61.304687c5.085937-5.085938 5.941406-13.035157 2.050781-19.089844l-21.785156-33.886719c5.003906-9.84375 9.242188-20.0625 12.664062-30.539063l39.351563-8.554687c7.03125-1.53125 12.046875-7.753906 12.046875-14.949219v-86.695312c0-7.195313-5.015625-13.417969-12.046875-14.949219zm-152.160156 58.296875c0 50.613281-41.179688 91.792969-91.792969 91.792969s-91.792969-41.179688-91.792969-91.792969 41.179688-91.792969 91.792969-91.792969 91.792969 41.179688 91.792969 91.792969zm0 0"/>'},
    "light_car" : {viewBox : "0 0 512 512", svg : '<path d="M384,140.804c-63.522,0-115.2,51.678-115.2,115.2s51.678,115.2,115.2,115.2c14.14,0,25.6-11.46,25.6-25.6v-179.2			C409.6,152.265,398.14,140.804,384,140.804z M384,345.604c-49.485,0-89.6-40.115-89.6-89.6s40.115-89.6,89.6-89.6V345.604z"/>	</g></g><g>	<g>		<path d="M128,140.804c-14.14,0-25.6,11.46-25.6,25.6v179.2c0,14.14,11.46,25.6,25.6,25.6c63.522,0,115.2-51.678,115.2-115.2			S191.522,140.804,128,140.804z M128,345.604v-179.2c49.485,0,89.6,40.115,89.6,89.6S177.485,345.604,128,345.604z"/>	</g></g><g>	<g>		<path d="M499.2,243.204H448c-7.074,0-12.8,5.726-12.8,12.8c0,7.074,5.726,12.8,12.8,12.8h51.2c7.074,0,12.8-5.726,12.8-12.8			C512,248.93,506.274,243.204,499.2,243.204z"/>	</g></g><g>	<g>		<path d="M495.454,93.359c-5.001-5.001-13.099-5.001-18.099,0l-38.4,38.4c-5.001,5-5.001,13.099,0,18.099			c2.492,2.5,5.768,3.746,9.045,3.746s6.554-1.246,9.054-3.746l38.4-38.4C500.454,106.458,500.454,98.359,495.454,93.359z"/>	</g></g><g>	<g>		<path d="M495.445,400.55l-38.391-38.4c-2.5-2.5-5.777-3.746-9.054-3.746s-6.554,1.246-9.054,3.746			c-5.001,5.001-5.001,13.099,0,18.099l38.4,38.4c5.001,5.001,13.099,5.001,18.099,0			C500.446,413.649,500.446,405.551,495.445,400.55z"/>	</g></g><g>	<g>		<path d="M64,243.204H12.8c-7.074,0-12.8,5.726-12.8,12.8c0,7.074,5.726,12.8,12.8,12.8H64c7.074,0,12.8-5.726,12.8-12.8			C76.8,248.93,71.074,243.204,64,243.204z"/>	</g></g><g>	<g>		<path d="M73.054,131.759l-38.4-38.409c-5.001-5.001-13.099-5.001-18.099,0c-5.001,5.001-5.001,13.099,0,18.099l38.4,38.4			c2.492,2.509,5.769,3.755,9.045,3.755s6.554-1.246,9.054-3.746C78.054,144.858,78.054,136.759,73.054,131.759z"/>	</g></g><g>	<g>		<path d="M73.045,362.15c-2.492-2.5-5.769-3.746-9.045-3.746s-6.554,1.246-9.054,3.746l-38.4,38.4			c-5.001,5.001-5.001,13.099,0,18.099c5.001,5.001,13.099,5.001,18.099,0l38.4-38.4C78.046,375.249,78.046,367.151,73.045,362.15z"			/>'},
    "engine_car" : {viewBox : "0 0 1000 1000", svg : ' <g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path d="M2244.1,3938.8v-306.3h765.8h765.8v-153.1v-153.2h-493.9c-381,0-518.8-5.7-606.9-28.7c-356.1-93.8-654.7-411.6-721.7-767.7l-21.1-116.8l-116.8-21c-356.1-67-673.9-365.7-767.7-721.7c-23-91.9-28.7-241.2-28.7-760V263.2H865.8H712.6v765.8v765.8H406.3H100V-43.1V-1881h306.3h306.3v765.8v765.8h153.1h153.2v-800.2c0-656.6,5.7-819.4,28.7-913.2c88.1-338.9,369.5-620.3,708.3-708.3c76.6-19.1,202.9-28.7,392.5-28.7H2426l612.6-612.6l612.6-612.6h1780.4c1958.4,0,1889.5-3.8,2117.3,116.8c141.7,76.6,321.6,256.5,398.2,398.2c97.6,183.8,116.8,296.7,116.8,675.8c0,386.7,11.5,411.6,105.3,229.7c68.9-132.1,254.6-319.7,384.8-390.5c434.6-235.5,976.3-70.8,1229.1,371.4c122.5,212.5,120.6,193.3,114.9,1711.5l-5.7,1376.5l-44,109.1c-95.7,237.4-325.4,465.2-555.2,551.3c-137.8,51.7-344.6,68.9-486.3,40.2c-252.7-53.6-516.9-254.6-637.5-484.4c-93.8-181.9-105.3-157-105.3,229.7c0,379.1-19.2,492-116.8,675.8c-76.6,141.7-256.5,321.6-398.2,398.2C7351.8,2089.5,7265.6,2101,6720,2101h-493.9v187.6c0,107.2-13.4,235.5-28.7,300.6c-88,336.9-371.4,620.3-708.3,708.3c-88.1,23-225.9,28.7-606.9,28.7h-493.9v153.2v153.1h765.8h765.8v306.3v306.3H4082H2244.1V3938.8z M5479.5,2679.2c126.3-61.3,134-101.5,134-677.7v-513.1h819.4c739,0,823.2-3.8,884.5-34.5c130.2-65.1,134-86.1,134-830.9V-43.1H8062h610.7l7.7,248.9c5.7,241.2,7.6,248.9,59.3,300.6c49.8,51.7,61.3,53.6,243.1,53.6s193.3-1.9,243.1-53.6l53.6-51.7l5.7-1388c5.7-1531.5,9.6-1468.4-114.9-1533.4c-44-23-99.6-28.7-218.2-23c-145.5,5.7-164.6,11.5-212.5,59.3c-51.7,51.7-53.6,59.4-59.3,300.6l-7.7,248.9H8062h-610.7v-664.3c0-746.6-3.8-767.7-134-832.8c-63.2-32.5-185.7-34.5-1742.1-34.5H3900.1l-612.6,612.6l-612.6,612.6h-421.2c-476.7,0-528.4,11.5-587.7,134c-32.5,63.2-34.5,191.4-34.5,1857c0,1665.5,1.9,1793.8,34.5,1857c59.3,118.7,116.8,134,526.5,134h358v359.9c0,407.8,15.3,465.2,134,524.6c61.3,32.5,168.5,34.5,1397.5,34.5C5311,2713.6,5418.2,2711.7,5479.5,2679.2z"/></g></g>'},
    "fuel_car" : {viewBox : "0 0 1000 1000", svg : '<g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path d="M2418.2,4800.1c-169.4-115.5-498.7-338.9-729.7-496.7c-254.1-171.4-437.1-308.1-458.2-342.7c-109.8-173.3,121.3-385.1,290.7-267.6c23.1,17.3,50.1,23.1,59.7,15.4c7.7-9.6,107.8-175.2,221.4-367.7l206-348.5L1848.3,2792c-207.9-259.9-371.6-510.2-410.1-627.7c-28.9-82.8-30.8-387-26.9-3163.3l5.8-3070.9l71.2-146.3c125.2-250.3,400.5-471.7,679.6-544.9c100.1-25,467.9-28.9,2965-28.9c2499.1,0,2864.9,3.8,2965,28.9c329.2,86.7,612.3,377.4,681.6,702.8c17.3,78.9,21.2,981.9,17.3,3629.3l-5.8,3523.4l-71.2,148.3c-248.4,523.7-854.8,1186-1249.5,1363.1l-104,48.1H6018.6H4670.8l-127.1-44.3c-150.2-52-319.6-150.2-477.5-279.2l-113.6-90.5l-412,3.9l-410.1,5.8l-121.3,179.1L2888,4607.6l57.8,67.4c127.1,142.5,36.6,335-155.9,335C2739.7,5010,2656.9,4961.9,2418.2,4800.1z M2714.7,4132c96.3-144.4,182.9-252.2,215.6-269.6c44.3-21.2,163.7-27,620-27h568l167.5,144.4c92.4,78.9,221.4,169.4,285,202.2l115.5,57.8h1332.3h1332.3l123.2-78.9c227.2-146.3,591.1-554.5,793.2-887.6c140.6-231,130.9,65.5,125.2-3810.2l-5.8-3492.6l-40.4-86.6c-44.3-96.3-132.9-181-238.8-229.1c-59.7-27-352.3-30.8-2888-36.6c-2878.4-5.8-2988.1-3.8-3126.8,67.4c-84.7,42.4-181,138.6-229.1,227.2l-42.4,77l-5.8,3013.2c-1.9,1657.7,0,3032.4,5.8,3055.5c13.5,53.9,200.2,306.1,437.1,589.1c209.9,248.4,234.9,308.1,179.1,417.8c-19.3,34.7-140.5,246.4-273.4,467.9c-130.9,221.4-234.9,412-231,423.6c7.7,23.1,573.7,415.9,600.7,415.9C2545.3,4372.7,2626.1,4264.9,2714.7,4132z"/><path d="M5013.6,3400.4c-55.8-28.9-121.3-125.1-121.3-181c0-13.5,13.5-52,30.8-86.6c59.7-127.1,42.4-125.1,1199.5-125.1c1120.5,0,1134,1.9,1203.3,98.2c50,73.2,40.4,179.1-25,252.2l-55.8,63.5l-1085.9,3.9C5204.2,3431.2,5067.5,3427.4,5013.6,3400.4z"/><path d="M2578,2150.9c-59.7-32.7-111.7-119.4-111.7-182.9c0-52-7.7-38.5,439-837.5c206-369.7,394.7-695,419.7-722c36.6-38.5,65.5-48.1,134.8-48.1c75.1,0,96.3,9.6,144.4,63.5c102,113.6,98.2,123.2-350.4,924.2c-221.4,398.6-423.6,745.1-448.6,770.1C2751.3,2174,2645.4,2189.4,2578,2150.9z"/><path d="M7462.6,2162.4c-21.2-9.6-52-32.7-71.3-52c-17.3-21.2-213.7-363.9-437.1-762.4c-448.6-800.9-450.5-810.6-350.4-924.2c48.1-53.9,69.3-63.5,144.4-63.5c67.4,0,98.2,11.5,134.8,48.1c63.5,67.4,839.4,1459.4,852.9,1530.6c13.5,82.8-21.2,157.9-94.4,202.2C7574.3,2181.7,7526.1,2187.4,7462.6,2162.4z"/><path d="M3839.1,106.1c-111.7-38.5-261.8-179.1-321.5-298.4c-48.1-98.2-50.1-109.8-50.1-485.2c0-365.8,1.9-392.8,46.2-485.2c57.8-125.1,163.7-231,288.8-288.8l98.2-46.2h1203.3h1203.3l98.2,46.2c127.1,59.7,231,165.6,290.7,294.6c46.2,100.1,48.1,119.4,46.2,483.3c-1.9,363.9-5.8,383.2-52,479.4C6630.8-71,6480.7,67.6,6361.3,108.1C6230.4,152.4,3964.2,152.4,3839.1,106.1z M6293.9-296.2c40.4-28.9,42.4-38.5,42.4-383.2c0-296.5-5.8-358.1-30.8-383.2c-27-26.9-161.7-30.8-1201.4-30.8s-1174.5,3.8-1201.4,30.8c-25,25-30.8,86.6-30.8,383.2c0,344.6,1.9,354.3,42.4,383.2c38.5,26.9,182.9,30.8,1189.9,30.8C6111-265.4,6255.4-269.3,6293.9-296.2z"/><path d="M3359.7-1711.4c-48.1-25-63.5-48.1-525.6-878c-207.9-371.6-367.7-677.7-367.7-706.6c0-169.4,211.8-271.5,335-161.7c25,25,215.6,348.5,421.7,718.1c458.2,826,437.1,783.6,437.1,860.6C3658.1-1738.3,3494.5-1647.8,3359.7-1711.4z"/><path d="M6646.2-1717.2c-57.8-32.7-96.3-102-98.2-175.2c0-67.4,799-1517.2,868.3-1573c53.9-44.3,186.8-44.3,240.7,0c53.9,42.4,84.7,104,84.7,167.5c0,30.8-165.6,350.4-417.8,802.9c-315.8,566-433.2,756.6-471.7,777.8C6788.7-1684.4,6707.9-1684.4,6646.2-1717.2z"/></g></g>'},
}



//SVG
export function Svg({variable, custom_class})
{
    if( custom_class != undefined ){
        var custom_class_f = custom_class + " icon"
    }else{
        var custom_class_f = "icon"
    }

   
    var viewBox = SVG[variable].viewBox
    var svg_content = SVG[variable].svg
    return <svg id= {variable}  className={custom_class_f}  fill="currentColor" viewBox={viewBox}  xmlns="http://www.w3.org/2000/svg">  <g dangerouslySetInnerHTML={{ __html: svg_content }} />  </svg>
}

export function blink(){
    console.log("test")
}
