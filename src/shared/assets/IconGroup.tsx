import React from 'react';
import { useTranslation } from 'react-i18next';

const IconGroup: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  const { t } = useTranslation();

  return (
<svg
  {...props}
  className="w-[300px] sm:w-[348px] mx-auto"
  height="137"
  viewBox="0 0 348 137"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
      <rect width="154" height="137" rx="11" fill="white"/>
      <rect x="194" width="154" height="137" rx="11" fill="white"/>

      <g clip-path="url(#clip0_12_79)">
        <path d="M48.48 31.8052C48.3776 31.8436 48.032 31.9588 47.7247 32.074L47.1743 32.2788L51.8849 37.0022C63.1366 48.2796 73.4027 58.328 73.9531 58.6096C75.7324 59.5185 77.8061 59.5185 79.5854 58.6096C80.1358 58.328 90.4019 48.2796 101.641 37.0022L106.364 32.2788L105.801 32.0356C105.263 31.8052 104.431 31.7924 76.9613 31.7668C61.4086 31.754 48.5824 31.7796 48.48 31.8052Z" fill="url(#paint0_linear_12_79)"/>
        <path d="M44.2944 35.5303C44.0768 36.1191 44.064 36.9768 44.064 54.8336C44.064 73.2536 44.064 73.5352 44.32 74.0729L44.576 74.6233L54.5604 64.7028L64.5449 54.7952L60.7687 50.9934C58.695 48.9069 54.1892 44.4395 50.7587 41.0602L44.5376 34.9159L44.2944 35.5303Z" fill="url(#paint1_linear_12_79)"/>
        <path d="M98.9786 44.8491L88.9941 54.7696L98.9786 64.69L108.963 74.6233L109.219 74.0729C109.475 73.5352 109.475 73.2536 109.475 54.7696C109.475 36.2855 109.475 36.0039 109.219 35.4663L108.963 34.9159L98.9786 44.8491Z" fill="url(#paint2_linear_12_79)"/>
        <path d="M57.1333 67.3395L47.1616 77.2343L47.7248 77.4903C48.2881 77.7463 48.4673 77.7463 76.7054 77.7463C104.201 77.7463 105.148 77.7335 105.75 77.5031L106.364 77.2599L102.486 73.3685C100.348 71.2308 95.8422 66.7634 92.4757 63.4481L86.357 57.419L84.6673 59.0703C82.6704 61.0416 82.2352 61.3872 81.0192 62.0016C77.7166 63.6529 73.71 63.2305 70.8299 60.9136C70.3947 60.568 69.4218 59.6591 68.641 58.8783C67.873 58.0974 67.2073 57.4574 67.1689 57.4574C67.1305 57.4574 62.6119 61.912 57.1333 67.3395Z" fill="url(#paint3_linear_12_79)"/>
      </g>
      {/* Text "Россия" in the first rectangle */}
      <text x="10" y="115" font-family="Arial" font-size="16" fontWeight='normal' fill="#333">{t('instalike@mail.ru')}</text>
      {/* Text "Россия" in the second rectangle with translation */}
      <text x="235" y="115" font-family="Arial" font-size="20" fontWeight='normal' fill="#333">{t('Россия')}</text>

      <g clip-path="url(#clip1_12_79)">
        <path d="M269.041 22.0768C263.614 22.6144 259.07 24.7265 255.345 28.4643C250.148 33.6485 247.933 41.0473 249.392 48.254C249.712 49.8157 250.276 51.5438 250.941 52.9646C251.223 53.5662 255.55 61.477 260.567 70.5526C270.104 87.8334 269.925 87.539 270.769 87.539C271.614 87.539 271.435 87.8334 280.984 70.5526C285.989 61.4642 290.329 53.5534 290.598 52.9646C292.978 47.8444 293.222 41.6617 291.263 36.3751C290.111 33.2901 288.485 30.7428 286.194 28.4643C282.879 25.1362 279.026 23.1521 274.29 22.3072C273.266 22.128 270.001 21.9744 269.041 22.0768ZM271.857 33.0085C274.61 33.3157 276.837 34.4294 278.731 36.4391C280.805 38.6408 281.752 41.2393 281.612 44.3242C281.522 46.1547 281.317 46.9995 280.562 48.5868C279.205 51.3773 276.811 53.4126 273.778 54.3343C272.754 54.6415 272.421 54.6799 270.769 54.6799C269.118 54.6799 268.785 54.6415 267.761 54.3343C265.572 53.6687 263.691 52.427 262.308 50.6989C261.476 49.6749 260.542 47.8444 260.209 46.6411C259.889 45.4635 259.812 42.993 260.068 41.7641C261.003 37.1175 264.843 33.5589 269.489 33.0213C270.014 32.9573 270.513 32.9061 270.577 32.8933C270.654 32.8933 271.23 32.9445 271.857 33.0085Z" fill="url(#paint4_linear_12_79)"/>
      </g>

      <defs>
        <linearGradient id="paint0_linear_12_79" x1="47.1743" y1="31.7634" x2="80.102" y2="77.9958" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFC001"/>
          <stop offset="1" stop-color="#FC01C6"/>
        </linearGradient>
        <linearGradient id="paint1_linear_12_79" x1="44.064" y1="34.9159" x2="74.4695" y2="45.1569" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFC001"/>
          <stop offset="1" stop-color="#FC01C6"/>
        </linearGradient>
        <linearGradient id="paint2_linear_12_79" x1="88.9941" y1="34.9159" x2="119.4" y2="45.1569" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFC001"/>
          <stop offset="1" stop-color="#FC01C6"/>
        </linearGradient>
        <linearGradient id="paint3_linear_12_79" x1="47.1616" y1="57.419" x2="68.3578" y2="97.7305" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFC001"/>
          <stop offset="1" stop-color="#FC01C6"/>
        </linearGradient>
        <linearGradient id="paint4_linear_12_79" x1="248.952" y1="22.0439" x2="309.591" y2="48.4174" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFC001"/>
          <stop offset="1" stop-color="#FC01C6"/>
        </linearGradient>
        <clipPath id="clip0_12_79">
          <rect width="65.539" height="65.539" fill="white" transform="translate(44 22)"/>
        </clipPath>
        <clipPath id="clip1_12_79">
          <rect width="65.539" height="65.539" fill="white" transform="translate(238 22)"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconGroup;