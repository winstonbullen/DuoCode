import React from 'react';

interface SettingBtnProps {}
const SettingBtn: React.FC<SettingBtnProps> = () => {
    return (
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M29.3468 5.96766V5.96768L29.6636 9.13566C29.8269 10.7692 29.9086 11.586 30.4614 11.8149C31.0142 12.0439 31.6495 11.5241 32.9201 10.4846L35.3842 8.46851C36.0499 7.9238 36.3828 7.65144 36.7676 7.67063C37.1525 7.68983 37.4566 7.99395 38.0649 8.60221L41.3977 11.9351C42.006 12.5433 42.3101 12.8475 42.3293 13.2323C42.3485 13.6171 42.0761 13.95 41.5314 14.6158L39.5153 17.0799C38.4757 18.3505 37.956 18.9858 38.1849 19.5386C38.4139 20.0914 39.2307 20.1731 40.8642 20.3364L44.0323 20.6533C44.8883 20.7388 45.3162 20.7816 45.5748 21.0673C45.8333 21.353 45.8333 21.7831 45.8333 22.6433V27.3567C45.8333 28.2169 45.8333 28.647 45.5748 28.9327C45.3162 29.2184 44.8883 29.2612 44.0323 29.3468L40.865 29.6635C39.2315 29.8269 38.4147 29.9085 38.1857 30.4614C37.9567 31.0142 38.4765 31.6495 39.5161 32.9201L41.5315 35.3834C42.0762 36.0491 42.3486 36.382 42.3294 36.7668C42.3102 37.1517 42.0061 37.4558 41.3978 38.064L38.065 41.3969C37.4567 42.0052 37.1526 42.3093 36.7677 42.3285C36.3829 42.3477 36.05 42.0753 35.3843 41.5306L32.9202 39.5146C31.6496 38.475 31.0143 37.9552 30.4615 38.1842C29.9087 38.4132 29.827 39.2299 29.6636 40.8635L29.3468 44.0324C29.2612 44.8883 29.2184 45.3163 28.9327 45.5748C28.647 45.8334 28.2169 45.8334 27.3567 45.8334H22.6433C21.7831 45.8334 21.353 45.8334 21.0673 45.5748C20.7816 45.3163 20.7388 44.8883 20.6532 44.0324L20.3364 40.8643C20.1731 39.2307 20.0914 38.414 19.5386 38.185C18.9858 37.956 18.3505 38.4758 17.0799 39.5154L14.6156 41.5316C13.9499 42.0763 13.617 42.3486 13.2322 42.3294C12.8473 42.3102 12.5432 42.0061 11.9349 41.3979L8.60208 38.065C7.99383 37.4567 7.6897 37.1526 7.67051 36.7678C7.65132 36.3829 7.92367 36.0501 8.46838 35.3843L10.4845 32.9201C11.5241 31.6495 12.0439 31.0142 11.8149 30.4614C11.5859 29.9086 10.7692 29.8269 9.13562 29.6636L5.96765 29.3468H5.96763C5.11171 29.2612 4.68375 29.2184 4.4252 28.9327C4.16666 28.647 4.16666 28.2169 4.16666 27.3567L4.16666 22.6433C4.16666 21.7831 4.16666 21.353 4.4252 21.0673C4.68375 20.7816 5.11171 20.7388 5.96763 20.6533H5.96765L9.1364 20.3364C10.7699 20.173 11.5867 20.0913 11.8157 19.5385C12.0447 18.9857 11.5249 18.3504 10.4853 17.0798L10.4853 17.0798L8.46848 14.6148C7.92377 13.9491 7.65141 13.6162 7.67061 13.2313C7.6898 12.8465 7.99393 12.5424 8.60218 11.9341L11.935 8.60126C12.5433 7.99301 12.8474 7.68888 13.2323 7.66969C13.6171 7.65049 13.95 7.92285 14.6157 8.46756L17.08 10.4837C18.3506 11.5233 18.9859 12.0431 19.5387 11.8141C20.0915 11.5851 20.1732 10.7684 20.3365 9.13484L20.6532 5.96768V5.96766C20.7388 5.11174 20.7816 4.68378 21.0673 4.42523C21.353 4.16669 21.7831 4.16669 22.6433 4.16669H27.3567C28.2169 4.16669 28.647 4.16669 28.9327 4.42523C29.2184 4.68378 29.2612 5.11174 29.3468 5.96766ZM25 33.3334C29.6024 33.3334 33.3333 29.6024 33.3333 25C33.3333 20.3976 29.6024 16.6667 25 16.6667C20.3976 16.6667 16.6667 20.3976 16.6667 25C16.6667 29.6024 20.3976 33.3334 25 33.3334Z" fill="#D9D9D9"/>
        <path d="M29.3468 5.96768H28.7468V5.9976L28.7497 6.02738L29.3468 5.96768ZM29.3468 5.96766H29.9468V5.93773L29.9438 5.90796L29.3468 5.96766ZM29.6636 9.13566L29.0665 9.19536L29.6636 9.13566ZM30.4614 11.8149L30.691 11.2606L30.691 11.2606L30.4614 11.8149ZM32.9201 10.4846L33.3 10.9489L32.9201 10.4846ZM35.3842 8.46851L35.0042 8.00413L35.0042 8.00413L35.3842 8.46851ZM36.7676 7.67063L36.7378 8.26989H36.7378L36.7676 7.67063ZM38.0649 8.60221L37.6406 9.02647L38.0649 8.60221ZM41.3977 11.9351L40.9735 12.3593L41.3977 11.9351ZM42.3293 13.2323L42.9286 13.2024L42.9286 13.2024L42.3293 13.2323ZM41.5314 14.6158L41.0671 14.2358L41.5314 14.6158ZM39.5153 17.0799L39.0509 16.7L39.5153 17.0799ZM40.8642 20.3364L40.8045 20.9335L40.8642 20.3364ZM44.0323 20.6533L44.092 20.0562L44.0323 20.6533ZM45.5748 21.0673L45.1299 21.4699L45.1299 21.4699L45.5748 21.0673ZM45.5748 28.9327L45.1299 28.5301L45.1299 28.5301L45.5748 28.9327ZM44.0323 29.3468L44.092 29.9438L44.0323 29.3468ZM40.865 29.6635L40.8053 29.0665L40.865 29.6635ZM38.1857 30.4614L37.6314 30.2318L37.6314 30.2318L38.1857 30.4614ZM39.5161 32.9201L39.0517 33.3L39.5161 32.9201ZM41.5315 35.3834L41.9959 35.0034V35.0034L41.5315 35.3834ZM42.3294 36.7668L42.9287 36.7967L42.9287 36.7967L42.3294 36.7668ZM36.7677 42.3285L36.7976 42.9277L36.7976 42.9277L36.7677 42.3285ZM35.3843 41.5306L35.0043 41.995H35.0043L35.3843 41.5306ZM32.9202 39.5146L32.5403 39.9789L32.9202 39.5146ZM30.4615 38.1842L30.2319 37.6298L30.2319 37.6298L30.4615 38.1842ZM29.6636 40.8635L29.0666 40.8038L29.6636 40.8635ZM29.3468 44.0324L29.9438 44.0921L29.3468 44.0324ZM28.9327 45.5748L28.5301 45.1299L28.5301 45.1299L28.9327 45.5748ZM21.0673 45.5748L21.4699 45.1299L21.4699 45.1299L21.0673 45.5748ZM20.6532 44.0324L20.0562 44.0921L20.6532 44.0324ZM20.3364 40.8643L20.9334 40.8046L20.3364 40.8643ZM19.5386 38.185L19.7682 37.6307L19.7682 37.6307L19.5386 38.185ZM17.0799 39.5154L17.4598 39.9797L17.0799 39.5154ZM14.6156 41.5316L14.9956 41.9959L14.6156 41.5316ZM13.2322 42.3294L13.2023 42.9287L13.2023 42.9287L13.2322 42.3294ZM11.9349 41.3979L11.5107 41.8221L11.9349 41.3979ZM8.60208 38.065L9.02635 37.6407L8.60208 38.065ZM7.67051 36.7678L7.07125 36.7977L7.67051 36.7678ZM8.46838 35.3843L8.00401 35.0044L8.00401 35.0044L8.46838 35.3843ZM10.4845 32.9201L10.9489 33.3001L10.4845 32.9201ZM11.8149 30.4614L11.2606 30.691L11.2606 30.691L11.8149 30.4614ZM9.13562 29.6636L9.19532 29.0666H9.19532L9.13562 29.6636ZM5.96765 29.3468L6.02735 28.7498L5.99757 28.7468H5.96765V29.3468ZM5.96763 29.3468L5.90793 29.9438L5.9377 29.9468H5.96763V29.3468ZM4.4252 28.9327L3.98033 29.3353H3.98033L4.4252 28.9327ZM4.16666 27.3567H3.56666H4.16666ZM4.16666 22.6433H4.76666H4.16666ZM4.4252 21.0673L4.87008 21.4699H4.87008L4.4252 21.0673ZM5.96763 20.6533V20.0533H5.9377L5.90793 20.0562L5.96763 20.6533ZM5.96765 20.6533V21.2533H5.99757L6.02735 21.2503L5.96765 20.6533ZM9.1364 20.3364L9.1961 20.9334H9.1961L9.1364 20.3364ZM11.8157 19.5385L11.2614 19.3089L11.2614 19.3089L11.8157 19.5385ZM10.4853 17.0798L10.9497 16.6999L10.9307 16.6767L10.9096 16.6556L10.4853 17.0798ZM10.4853 17.0798L10.0209 17.4598L10.0399 17.4829L10.061 17.5041L10.4853 17.0798ZM8.46848 14.6148L8.00411 14.9948L8.46848 14.6148ZM7.67061 13.2313L7.07135 13.2015V13.2015L7.67061 13.2313ZM8.60218 11.9341L8.17792 11.5099H8.17792L8.60218 11.9341ZM11.935 8.60126L12.3593 9.02553L11.935 8.60126ZM13.2323 7.66969L13.2621 8.26894H13.2622L13.2323 7.66969ZM14.6157 8.46756L14.9957 8.00319V8.00319L14.6157 8.46756ZM17.08 10.4837L17.4599 10.0194L17.4599 10.0194L17.08 10.4837ZM19.5387 11.8141L19.3091 11.2598L19.3091 11.2598L19.5387 11.8141ZM20.3365 9.13484L20.9335 9.19454V9.19454L20.3365 9.13484ZM20.6532 5.96768L21.2502 6.02738L21.2532 5.9976V5.96768H20.6532ZM20.6532 5.96766L20.0562 5.90796L20.0532 5.93773V5.96766H20.6532ZM21.0673 4.42523L21.4699 4.87011L21.4699 4.87011L21.0673 4.42523ZM28.9327 4.42523L28.5301 4.87011V4.87011L28.9327 4.42523ZM29.9468 5.96768V5.96766H28.7468V5.96768H29.9468ZM30.2606 9.07595L29.9438 5.90798L28.7497 6.02738L29.0665 9.19536L30.2606 9.07595ZM30.691 11.2606C30.6848 11.258 30.5946 11.2384 30.4983 10.8556C30.4018 10.472 30.3443 9.91301 30.2606 9.07595L29.0665 9.19536C29.1462 9.99184 29.2112 10.658 29.3346 11.1484C29.4581 11.6396 29.6852 12.1429 30.2318 12.3693L30.691 11.2606ZM32.5402 10.0202C31.8891 10.5529 31.4532 10.9075 31.1137 11.1105C30.7749 11.3131 30.6972 11.2632 30.691 11.2606L30.2318 12.3693C30.7784 12.5957 31.2948 12.4004 31.7295 12.1404C32.1635 11.8809 32.6805 11.4558 33.3 10.9489L32.5402 10.0202ZM35.0042 8.00413L32.5402 10.0202L33.3 10.9489L35.7641 8.93288L35.0042 8.00413ZM36.7975 7.07138C36.4357 7.05333 36.1333 7.18093 35.8638 7.34897C35.6088 7.50795 35.3247 7.74193 35.0042 8.00413L35.7641 8.93288C36.1094 8.65037 36.3246 8.47582 36.4987 8.36724C36.6583 8.26772 36.7147 8.26874 36.7378 8.26989L36.7975 7.07138ZM38.4891 8.17794C38.1963 7.88516 37.9369 7.62407 37.699 7.44051C37.4476 7.24649 37.1594 7.08942 36.7975 7.07138L36.7378 8.26989C36.7608 8.27104 36.817 8.27564 36.9659 8.39054C37.1284 8.51591 37.3251 8.711 37.6406 9.02647L38.4891 8.17794ZM41.822 11.5108L38.4891 8.17794L37.6406 9.02647L40.9735 12.3593L41.822 11.5108ZM42.9286 13.2024C42.9105 12.8406 42.7534 12.5523 42.5594 12.3009C42.3759 12.063 42.1148 11.8036 41.822 11.5108L40.9735 12.3593C41.2889 12.6748 41.484 12.8716 41.6094 13.034C41.7243 13.1829 41.7289 13.2392 41.73 13.2622L42.9286 13.2024ZM41.9958 14.9957C42.258 14.6752 42.492 14.3911 42.651 14.1361C42.819 13.8667 42.9466 13.5642 42.9286 13.2024L41.73 13.2622C41.7312 13.2852 41.7322 13.3416 41.6327 13.5012C41.5241 13.6753 41.3496 13.8905 41.0671 14.2358L41.9958 14.9957ZM39.9797 17.4598L41.9958 14.9957L41.0671 14.2358L39.0509 16.7L39.9797 17.4598ZM38.7393 19.309C38.7367 19.3028 38.6868 19.2251 38.8894 18.8863C39.0924 18.5468 39.447 18.1109 39.9797 17.4598L39.0509 16.7C38.5441 17.3195 38.119 17.8365 37.8595 18.2705C37.5995 18.7052 37.4042 19.2216 37.6306 19.7682L38.7393 19.309ZM40.9239 19.7394C40.0869 19.6557 39.5279 19.5982 39.1443 19.5017C38.7615 19.4054 38.7419 19.3152 38.7393 19.309L37.6306 19.7682C37.857 20.3148 38.3603 20.5419 38.8515 20.6654C39.3419 20.7888 40.008 20.8538 40.8045 20.9335L40.9239 19.7394ZM44.092 20.0562L40.9239 19.7394L40.8045 20.9335L43.9726 21.2503L44.092 20.0562ZM46.0196 20.6647C45.7766 20.3961 45.4725 20.2725 45.1631 20.2008C44.8704 20.1329 44.504 20.0974 44.092 20.0562L43.9726 21.2503C44.4166 21.2947 44.6921 21.3234 44.892 21.3698C45.0753 21.4122 45.1144 21.4529 45.1299 21.4699L46.0196 20.6647ZM46.4333 22.6433C46.4333 22.2293 46.4345 21.8612 46.3961 21.5632C46.3555 21.2482 46.2627 20.9333 46.0196 20.6647L45.1299 21.4699C45.1454 21.487 45.1819 21.53 45.2059 21.7166C45.2322 21.9201 45.2333 22.1972 45.2333 22.6433H46.4333ZM46.4333 27.3567V22.6433H45.2333V27.3567H46.4333ZM46.0196 29.3353C46.2627 29.0667 46.3555 28.7518 46.3961 28.4368C46.4345 28.1388 46.4333 27.7708 46.4333 27.3567H45.2333C45.2333 27.8029 45.2322 28.0799 45.2059 28.2835C45.1819 28.47 45.1454 28.513 45.1299 28.5301L46.0196 29.3353ZM44.092 29.9438C44.504 29.9026 44.8704 29.8671 45.1631 29.7993C45.4725 29.7275 45.7766 29.6039 46.0196 29.3353L45.1299 28.5301C45.1144 28.5472 45.0753 28.5878 44.892 28.6303C44.6921 28.6766 44.4166 28.7054 43.9726 28.7498L44.092 29.9438ZM40.9247 30.2605L44.092 29.9438L43.9726 28.7498L40.8053 29.0665L40.9247 30.2605ZM38.7401 30.691C38.7426 30.6847 38.7622 30.5946 39.1451 30.4983C39.5287 30.4017 40.0877 30.3442 40.9247 30.2605L40.8053 29.0665C40.0088 29.1461 39.3426 29.2112 38.8523 29.3345C38.3611 29.4581 37.8578 29.6852 37.6314 30.2318L38.7401 30.691ZM39.9805 32.5401C39.4478 31.8891 39.0932 31.4531 38.8902 31.1136C38.6876 30.7748 38.7375 30.6972 38.7401 30.691L37.6314 30.2318C37.405 30.7783 37.6003 31.2948 37.8603 31.7295C38.1198 32.1635 38.5449 32.6805 39.0517 33.3L39.9805 32.5401ZM41.9959 35.0034L39.9805 32.5401L39.0517 33.3L41.0672 35.7633L41.9959 35.0034ZM42.9287 36.7967C42.9467 36.4349 42.8191 36.1325 42.6511 35.863C42.4921 35.608 42.2581 35.3239 41.9959 35.0034L41.0672 35.7633C41.3497 36.1086 41.5242 36.3238 41.6328 36.4979C41.7323 36.6575 41.7313 36.7139 41.7301 36.7369L42.9287 36.7967ZM41.8221 38.4883C42.1149 38.1955 42.376 37.9361 42.5595 37.6982C42.7535 37.4468 42.9106 37.1585 42.9287 36.7967L41.7301 36.7369C41.729 36.76 41.7244 36.8162 41.6095 36.9651C41.4841 37.1276 41.289 37.3243 40.9736 37.6398L41.8221 38.4883ZM38.4892 41.8212L41.8221 38.4883L40.9736 37.6398L37.6407 40.9726L38.4892 41.8212ZM36.7976 42.9277C37.1595 42.9097 37.4477 42.7526 37.6991 42.5586C37.937 42.3751 38.1964 42.114 38.4892 41.8212L37.6407 40.9726C37.3252 41.2881 37.1285 41.4832 36.966 41.6086C36.8171 41.7235 36.7609 41.7281 36.7379 41.7292L36.7976 42.9277ZM35.0043 41.995C35.3248 42.2572 35.6089 42.4912 35.8639 42.6501C36.1334 42.8182 36.4358 42.9458 36.7976 42.9277L36.7379 41.7292C36.7148 41.7304 36.6584 41.7314 36.4988 41.6319C36.3247 41.5233 36.1095 41.3488 35.7642 41.0662L35.0043 41.995ZM32.5403 39.9789L35.0043 41.995L35.7642 41.0662L33.3001 39.0502L32.5403 39.9789ZM30.6911 38.7385C30.6973 38.7359 30.775 38.686 31.1137 38.8886C31.4533 39.0916 31.8892 39.4462 32.5403 39.9789L33.3001 39.0502C32.6806 38.5433 32.1636 38.1182 31.7296 37.8587C31.2949 37.5987 30.7785 37.4034 30.2319 37.6298L30.6911 38.7385ZM30.2607 40.9232C30.3444 40.0861 30.4019 39.5271 30.4984 39.1435C30.5947 38.7607 30.6849 38.7411 30.6911 38.7385L30.2319 37.6298C29.6853 37.8562 29.4582 38.3595 29.3347 38.8507C29.2113 39.3411 29.1463 40.0073 29.0666 40.8038L30.2607 40.9232ZM29.9438 44.0921L30.2607 40.9232L29.0666 40.8038L28.7497 43.9727L29.9438 44.0921ZM29.3353 46.0197C29.6039 45.7766 29.7275 45.4725 29.7992 45.1631C29.8671 44.8704 29.9026 44.5041 29.9438 44.0921L28.7497 43.9727C28.7053 44.4166 28.6766 44.6922 28.6303 44.8921C28.5878 45.0753 28.5472 45.1145 28.5301 45.1299L29.3353 46.0197ZM27.3567 46.4334C27.7707 46.4334 28.1388 46.4345 28.4368 46.3961C28.7518 46.3555 29.0667 46.2628 29.3353 46.0197L28.5301 45.1299C28.513 45.1454 28.47 45.1819 28.2834 45.206C28.0799 45.2322 27.8028 45.2334 27.3567 45.2334V46.4334ZM22.6433 46.4334H27.3567V45.2334H22.6433V46.4334ZM20.6647 46.0197C20.9333 46.2628 21.2482 46.3555 21.5632 46.3961C21.8612 46.4345 22.2292 46.4334 22.6433 46.4334V45.2334C22.1972 45.2334 21.9201 45.2322 21.7166 45.206C21.53 45.1819 21.487 45.1454 21.4699 45.1299L20.6647 46.0197ZM20.0562 44.0921C20.0974 44.5041 20.1329 44.8704 20.2007 45.1631C20.2725 45.4725 20.3961 45.7766 20.6647 46.0197L21.4699 45.1299C21.4528 45.1145 21.4122 45.0753 21.3697 44.8921C21.3234 44.6922 21.2946 44.4166 21.2502 43.9727L20.0562 44.0921ZM19.7394 40.924L20.0562 44.0921L21.2502 43.9727L20.9334 40.8046L19.7394 40.924ZM19.309 38.7393C19.3152 38.7419 19.4054 38.7615 19.5017 39.1443C19.5982 39.528 19.6557 40.0869 19.7394 40.924L20.9334 40.8046C20.8538 40.0081 20.7888 39.3419 20.6654 38.8515C20.5418 38.3603 20.3148 37.8571 19.7682 37.6307L19.309 38.7393ZM17.4598 39.9797C18.1109 39.447 18.5468 39.0925 18.8863 38.8894C19.2251 38.6868 19.3027 38.7367 19.309 38.7393L19.7682 37.6307C19.2216 37.4043 18.7052 37.5996 18.2705 37.8595C17.8365 38.119 17.3194 38.5441 16.6999 39.051L17.4598 39.9797ZM14.9956 41.9959L17.4598 39.9797L16.6999 39.051L14.2357 41.0672L14.9956 41.9959ZM13.2023 42.9287C13.5641 42.9467 13.8665 42.8191 14.136 42.6511C14.391 42.4921 14.6751 42.2581 14.9956 41.9959L14.2357 41.0672C13.8904 41.3497 13.6752 41.5242 13.5011 41.6328C13.3415 41.7323 13.2851 41.7313 13.262 41.7302L13.2023 42.9287ZM11.5107 41.8221C11.8035 42.1149 12.0629 42.376 12.3008 42.5596C12.5522 42.7536 12.8405 42.9106 13.2023 42.9287L13.2621 41.7302C13.239 41.729 13.1828 41.7244 13.0339 41.6095C12.8714 41.4842 12.6747 41.2891 12.3592 40.9736L11.5107 41.8221ZM8.17782 38.4893L11.5107 41.8221L12.3592 40.9736L9.02635 37.6407L8.17782 38.4893ZM7.07125 36.7977C7.0893 37.1595 7.24636 37.4477 7.44038 37.6992C7.62394 37.937 7.88504 38.1965 8.17782 38.4893L9.02635 37.6407C8.71088 37.3253 8.51578 37.1285 8.39041 36.966C8.27551 36.8171 8.27091 36.7609 8.26976 36.7379L7.07125 36.7977ZM8.00401 35.0044C7.74181 35.3248 7.50783 35.609 7.34885 35.8639C7.18081 36.1334 7.05321 36.4358 7.07125 36.7977L8.26976 36.7379C8.26862 36.7149 8.26759 36.6585 8.36711 36.4989C8.47569 36.3247 8.65024 36.1095 8.93276 35.7642L8.00401 35.0044ZM10.0201 32.5402L8.00401 35.0044L8.93276 35.7642L10.9489 33.3001L10.0201 32.5402ZM11.2606 30.691C11.2632 30.6973 11.3131 30.7749 11.1105 31.1137C10.9074 31.4532 10.5528 31.8891 10.0201 32.5402L10.9489 33.3001C11.4558 32.6806 11.8809 32.1635 12.1404 31.7295C12.4003 31.2948 12.5956 30.7784 12.3692 30.2318L11.2606 30.691ZM9.07591 30.2606C9.91296 30.3443 10.4719 30.4018 10.8556 30.4983C11.2384 30.5946 11.258 30.6848 11.2606 30.691L12.3692 30.2318C12.1428 29.6852 11.6396 29.4582 11.1484 29.3346C10.658 29.2112 9.9918 29.1462 9.19532 29.0666L9.07591 30.2606ZM5.90795 29.9438L9.07591 30.2606L9.19532 29.0666L6.02735 28.7498L5.90795 29.9438ZM5.96763 29.9468H5.96765V28.7468H5.96763V29.9468ZM3.98033 29.3353C4.22342 29.6039 4.5275 29.7275 4.83687 29.7993C5.12957 29.8671 5.49593 29.9026 5.90793 29.9438L6.02733 28.7498C5.58341 28.7054 5.30783 28.6766 5.10793 28.6303C4.92471 28.5878 4.88554 28.5472 4.87008 28.5301L3.98033 29.3353ZM3.56666 27.3567C3.56666 27.7708 3.56549 28.1388 3.6039 28.4368C3.64449 28.7518 3.73725 29.0667 3.98033 29.3353L4.87008 28.5301C4.85461 28.513 4.81809 28.47 4.79405 28.2835C4.76782 28.0799 4.76666 27.8029 4.76666 27.3567H3.56666ZM3.56666 22.6433L3.56666 27.3567H4.76666L4.76666 22.6433H3.56666ZM3.98033 20.6647C3.73725 20.9333 3.64449 21.2482 3.6039 21.5632C3.56549 21.8612 3.56666 22.2293 3.56666 22.6433H4.76666C4.76666 22.1972 4.76782 21.9201 4.79405 21.7166C4.81809 21.53 4.85461 21.487 4.87008 21.4699L3.98033 20.6647ZM5.90793 20.0562C5.49593 20.0974 5.12957 20.1329 4.83687 20.2008C4.5275 20.2725 4.22342 20.3961 3.98033 20.6647L4.87008 21.4699C4.88554 21.4529 4.92471 21.4122 5.10793 21.3698C5.30784 21.3234 5.58341 21.2947 6.02733 21.2503L5.90793 20.0562ZM5.96765 20.0533H5.96763V21.2533H5.96765V20.0533ZM9.0767 19.7394L5.90795 20.0562L6.02735 21.2503L9.1961 20.9334L9.0767 19.7394ZM11.2614 19.3089C11.2588 19.3152 11.2392 19.4053 10.8564 19.5016C10.4727 19.5982 9.91375 19.6557 9.0767 19.7394L9.1961 20.9334C9.99259 20.8538 10.6588 20.7887 11.1491 20.6654C11.6403 20.5418 12.1436 20.3147 12.37 19.7681L11.2614 19.3089ZM10.0209 17.4598C10.5536 18.1109 10.9082 18.5468 11.1113 18.8863C11.3138 19.2251 11.2639 19.3027 11.2614 19.3089L12.37 19.7681C12.5964 19.2216 12.4011 18.7051 12.1412 18.2704C11.8817 17.8365 11.4566 17.3194 10.9497 16.6999L10.0209 17.4598ZM10.061 17.5041L10.061 17.5041L10.9096 16.6556L10.9096 16.6556L10.061 17.5041ZM8.00411 14.9948L10.0209 17.4598L10.9497 16.6999L8.93285 14.2349L8.00411 14.9948ZM7.07135 13.2015C7.05331 13.5633 7.18091 13.8657 7.34895 14.1352C7.50793 14.3902 7.74191 14.6743 8.00411 14.9948L8.93285 14.2349C8.65034 13.8896 8.47579 13.6744 8.36721 13.5003C8.26769 13.3407 8.26871 13.2842 8.26986 13.2612L7.07135 13.2015ZM8.17792 11.5099C7.88513 11.8026 7.62404 12.0621 7.44048 12.3C7.24646 12.5514 7.0894 12.8396 7.07135 13.2015L8.26986 13.2612C8.27101 13.2382 8.27561 13.182 8.39051 13.0331C8.51588 12.8706 8.71098 12.6739 9.02645 12.3584L8.17792 11.5099ZM11.5108 8.177L8.17792 11.5099L9.02644 12.3584L12.3593 9.02553L11.5108 8.177ZM13.2024 7.07043C12.8406 7.08848 12.5523 7.24554 12.3009 7.43956C12.063 7.62312 11.8036 7.88422 11.5108 8.177L12.3593 9.02553C12.6748 8.71006 12.8715 8.51496 13.034 8.38959C13.1829 8.27469 13.2391 8.27009 13.2621 8.26894L13.2024 7.07043ZM14.9957 8.00319C14.6752 7.74099 14.3911 7.50701 14.1361 7.34803C13.8666 7.17999 13.5642 7.05239 13.2024 7.07043L13.2622 8.26894C13.2852 8.2678 13.3416 8.26677 13.5012 8.36629C13.6753 8.47487 13.8905 8.64942 14.2358 8.93194L14.9957 8.00319ZM17.4599 10.0194L14.9957 8.00319L14.2358 8.93194L16.7 10.9481L17.4599 10.0194ZM19.3091 11.2598C19.3028 11.2624 19.2252 11.3123 18.8864 11.1097C18.5469 10.9067 18.111 10.5521 17.4599 10.0194L16.7 10.9481C17.3195 11.455 17.8366 11.8801 18.2705 12.1396C18.7053 12.3996 19.2217 12.5949 19.7683 12.3685L19.3091 11.2598ZM19.7395 9.07514C19.6558 9.91219 19.5983 10.4712 19.5018 10.8548C19.4055 11.2376 19.3153 11.2572 19.3091 11.2598L19.7683 12.3685C20.3149 12.1421 20.5419 11.6388 20.6655 11.1476C20.7889 10.6572 20.8539 9.99103 20.9335 9.19454L19.7395 9.07514ZM20.0562 5.90798L19.7395 9.07514L20.9335 9.19454L21.2502 6.02738L20.0562 5.90798ZM20.0532 5.96766V5.96768H21.2532V5.96766H20.0532ZM20.6647 3.98036C20.3961 4.22345 20.2725 4.52753 20.2007 4.8369C20.1329 5.1296 20.0974 5.49596 20.0562 5.90796L21.2502 6.02736C21.2946 5.58344 21.3234 5.30787 21.3697 5.10796C21.4122 4.92474 21.4528 4.88557 21.4699 4.87011L20.6647 3.98036ZM22.6433 3.56669C22.2292 3.56669 21.8612 3.56552 21.5632 3.60393C21.2482 3.64452 20.9333 3.73728 20.6647 3.98036L21.4699 4.87011C21.487 4.85464 21.53 4.81813 21.7166 4.79408C21.9201 4.76785 22.1972 4.76669 22.6433 4.76669V3.56669ZM27.3567 3.56669H22.6433V4.76669H27.3567V3.56669ZM29.3353 3.98036C29.0667 3.73728 28.7518 3.64452 28.4368 3.60393C28.1388 3.56552 27.7707 3.56669 27.3567 3.56669V4.76669C27.8028 4.76669 28.0799 4.76785 28.2834 4.79408C28.47 4.81813 28.513 4.85464 28.5301 4.87011L29.3353 3.98036ZM29.9438 5.90796C29.9026 5.49596 29.8671 5.1296 29.7992 4.8369C29.7275 4.52753 29.6039 4.22345 29.3353 3.98036L28.5301 4.87011C28.5472 4.88557 28.5878 4.92474 28.6303 5.10796C28.6766 5.30787 28.7053 5.58344 28.7497 6.02736L29.9438 5.90796ZM32.7333 25C32.7333 29.271 29.271 32.7334 25 32.7334V33.9334C29.9337 33.9334 33.9333 29.9338 33.9333 25H32.7333ZM25 17.2667C29.271 17.2667 32.7333 20.729 32.7333 25H33.9333C33.9333 20.0663 29.9337 16.0667 25 16.0667V17.2667ZM17.2667 25C17.2667 20.729 20.729 17.2667 25 17.2667V16.0667C20.0662 16.0667 16.0667 20.0663 16.0667 25H17.2667ZM25 32.7334C20.729 32.7334 17.2667 29.271 17.2667 25H16.0667C16.0667 29.9338 20.0662 33.9334 25 33.9334V32.7334Z" fill="#D9D9D9"/>
      </svg>
    )
}

export default SettingBtn;