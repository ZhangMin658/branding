<template>
  <v-autocomplete
    v-model="innerValue"
    :items="timezones"
    label="Timezone"
    filled
  ></v-autocomplete>
</template>
<script>
import moment from 'moment-timezone'
export default {
  name: 'TimezoneSelect',
  props: {
    value: {
      type: null,
    },
  },
  data: () => ({
    items: [
      { text: 'Africa/Abidjan', value: 'Africa/Abidjan' },
      {
        text: 'Africa/Accra',
        value: 'Africa/Accra',
      },
      {
        text: 'Africa/Addis Ababa',
        value: 'Africa/Addis_Ababa',
      },
      { text: 'Africa/Algiers', value: 'Africa/Algiers' },
      {
        text: 'Africa/Asmara',
        value: 'Africa/Asmara',
      },
      { text: 'Africa/Bamako', value: 'Africa/Bamako' },
      {
        text: 'Africa/Bangui',
        value: 'Africa/Bangui',
      },
      { text: 'Africa/Banjul', value: 'Africa/Banjul' },
      {
        text: 'Africa/Bissau',
        value: 'Africa/Bissau',
      },
      {
        text: 'Africa/Blantyre',
        value: 'Africa/Blantyre',
      },
      {
        text: 'Africa/Brazzaville',
        value: 'Africa/Brazzaville',
      },
      { text: 'Africa/Bujumbura', value: 'Africa/Bujumbura' },
      {
        text: 'Africa/Cairo',
        value: 'Africa/Cairo',
      },
      { text: 'Africa/Casablanca', value: 'Africa/Casablanca' },
      {
        text: 'Africa/Ceuta',
        value: 'Africa/Ceuta',
      },
      { text: 'Africa/Conakry', value: 'Africa/Conakry' },
      {
        text: 'Africa/Dakar',
        value: 'Africa/Dakar',
      },
      {
        text: 'Africa/Dar es Salaam',
        value: 'Africa/Dar_es_Salaam',
      },
      { text: 'Africa/Djibouti', value: 'Africa/Djibouti' },
      {
        text: 'Africa/Douala',
        value: 'Africa/Douala',
      },
      { text: 'Africa/El Aaiun', value: 'Africa/El_Aaiun' },
      {
        text: 'Africa/Freetown',
        value: 'Africa/Freetown',
      },
      { text: 'Africa/Gaborone', value: 'Africa/Gaborone' },
      {
        text: 'Africa/Harare',
        value: 'Africa/Harare',
      },
      {
        text: 'Africa/Johannesburg',
        value: 'Africa/Johannesburg',
      },
      { text: 'Africa/Juba', value: 'Africa/Juba' },
      {
        text: 'Africa/Kampala',
        value: 'Africa/Kampala',
      },
      { text: 'Africa/Khartoum', value: 'Africa/Khartoum' },
      {
        text: 'Africa/Kigali',
        value: 'Africa/Kigali',
      },
      { text: 'Africa/Kinshasa', value: 'Africa/Kinshasa' },
      {
        text: 'Africa/Lagos',
        value: 'Africa/Lagos',
      },
      { text: 'Africa/Libreville', value: 'Africa/Libreville' },
      {
        text: 'Africa/Lome',
        value: 'Africa/Lome',
      },
      { text: 'Africa/Luanda', value: 'Africa/Luanda' },
      {
        text: 'Africa/Lubumbashi',
        value: 'Africa/Lubumbashi',
      },
      { text: 'Africa/Lusaka', value: 'Africa/Lusaka' },
      {
        text: 'Africa/Malabo',
        value: 'Africa/Malabo',
      },
      { text: 'Africa/Maputo', value: 'Africa/Maputo' },
      {
        text: 'Africa/Maseru',
        value: 'Africa/Maseru',
      },
      { text: 'Africa/Mbabane', value: 'Africa/Mbabane' },
      {
        text: 'Africa/Mogadishu',
        value: 'Africa/Mogadishu',
      },
      { text: 'Africa/Monrovia', value: 'Africa/Monrovia' },
      {
        text: 'Africa/Nairobi',
        value: 'Africa/Nairobi',
      },
      { text: 'Africa/Ndjamena', value: 'Africa/Ndjamena' },
      {
        text: 'Africa/Niamey',
        value: 'Africa/Niamey',
      },
      {
        text: 'Africa/Nouakchott',
        value: 'Africa/Nouakchott',
      },
      {
        text: 'Africa/Ouagadougou',
        value: 'Africa/Ouagadougou',
      },
      {
        text: 'Africa/Porto-Novo',
        value: 'Africa/Porto-Novo',
      },
      { text: 'Africa/Sao Tome', value: 'Africa/Sao_Tome' },
      {
        text: 'Africa/Tripoli',
        value: 'Africa/Tripoli',
      },
      { text: 'Africa/Tunis', value: 'Africa/Tunis' },
      {
        text: 'Africa/Windhoek',
        value: 'Africa/Windhoek',
      },
      { text: 'America/Adak', value: 'America/Adak' },
      {
        text: 'America/Anchorage',
        value: 'America/Anchorage',
      },
      { text: 'America/Anguilla', value: 'America/Anguilla' },
      {
        text: 'America/Antigua',
        value: 'America/Antigua',
      },
      {
        text: 'America/Araguaina',
        value: 'America/Araguaina',
      },
      {
        text: 'America/Argentina/Buenos Aires',
        value: 'America/Argentina/Buenos_Aires',
      },
      {
        text: 'America/Argentina/Catamarca',
        value: 'America/Argentina/Catamarca',
      },
      {
        text: 'America/Argentina/Cordoba',
        value: 'America/Argentina/Cordoba',
      },
      {
        text: 'America/Argentina/Jujuy',
        value: 'America/Argentina/Jujuy',
      },
      {
        text: 'America/Argentina/La Rioja',
        value: 'America/Argentina/La_Rioja',
      },
      {
        text: 'America/Argentina/Mendoza',
        value: 'America/Argentina/Mendoza',
      },
      {
        text: 'America/Argentina/Rio Gallegos',
        value: 'America/Argentina/Rio_Gallegos',
      },
      {
        text: 'America/Argentina/Salta',
        value: 'America/Argentina/Salta',
      },
      {
        text: 'America/Argentina/San Juan',
        value: 'America/Argentina/San_Juan',
      },
      {
        text: 'America/Argentina/San Luis',
        value: 'America/Argentina/San_Luis',
      },
      {
        text: 'America/Argentina/Tucuman',
        value: 'America/Argentina/Tucuman',
      },
      {
        text: 'America/Argentina/Ushuaia',
        value: 'America/Argentina/Ushuaia',
      },
      { text: 'America/Aruba', value: 'America/Aruba' },
      {
        text: 'America/Asuncion',
        value: 'America/Asuncion',
      },
      { text: 'America/Atikokan', value: 'America/Atikokan' },
      {
        text: 'America/Bahia',
        value: 'America/Bahia',
      },
      {
        text: 'America/Bahia Banderas',
        value: 'America/Bahia_Banderas',
      },
      { text: 'America/Barbados', value: 'America/Barbados' },
      {
        text: 'America/Belem',
        value: 'America/Belem',
      },
      {
        text: 'America/Belize',
        value: 'America/Belize',
      },
      {
        text: 'America/Blanc-Sablon',
        value: 'America/Blanc-Sablon',
      },
      {
        text: 'America/Boa Vista',
        value: 'America/Boa_Vista',
      },
      { text: 'America/Bogota', value: 'America/Bogota' },
      {
        text: 'America/Boise',
        value: 'America/Boise',
      },
      {
        text: 'America/Cambridge Bay',
        value: 'America/Cambridge_Bay',
      },
      {
        text: 'America/Campo Grande',
        value: 'America/Campo_Grande',
      },
      { text: 'America/Cancun', value: 'America/Cancun' },
      {
        text: 'America/Caracas',
        value: 'America/Caracas',
      },
      { text: 'America/Cayenne', value: 'America/Cayenne' },
      {
        text: 'America/Cayman',
        value: 'America/Cayman',
      },
      { text: 'America/Chicago', value: 'America/Chicago' },
      {
        text: 'America/Chihuahua',
        value: 'America/Chihuahua',
      },
      {
        text: 'America/Costa Rica',
        value: 'America/Costa_Rica',
      },
      { text: 'America/Creston', value: 'America/Creston' },
      {
        text: 'America/Cuiaba',
        value: 'America/Cuiaba',
      },
      {
        text: 'America/Curacao',
        value: 'America/Curacao',
      },
      {
        text: 'America/Danmarkshavn',
        value: 'America/Danmarkshavn',
      },
      {
        text: 'America/Dawson',
        value: 'America/Dawson',
      },
      {
        text: 'America/Dawson Creek',
        value: 'America/Dawson_Creek',
      },
      { text: 'America/Denver', value: 'America/Denver' },
      {
        text: 'America/Detroit',
        value: 'America/Detroit',
      },
      {
        text: 'America/Dominica',
        value: 'America/Dominica',
      },
      {
        text: 'America/Edmonton',
        value: 'America/Edmonton',
      },
      {
        text: 'America/Eirunepe',
        value: 'America/Eirunepe',
      },
      {
        text: 'America/El Salvador',
        value: 'America/El_Salvador',
      },
      {
        text: 'America/Fort Nelson',
        value: 'America/Fort_Nelson',
      },
      {
        text: 'America/Fortaleza',
        value: 'America/Fortaleza',
      },
      {
        text: 'America/Glace Bay',
        value: 'America/Glace_Bay',
      },
      {
        text: 'America/Goose Bay',
        value: 'America/Goose_Bay',
      },
      {
        text: 'America/Grand Turk',
        value: 'America/Grand_Turk',
      },
      {
        text: 'America/Grenada',
        value: 'America/Grenada',
      },
      {
        text: 'America/Guadeloupe',
        value: 'America/Guadeloupe',
      },
      {
        text: 'America/Guatemala',
        value: 'America/Guatemala',
      },
      {
        text: 'America/Guayaquil',
        value: 'America/Guayaquil',
      },
      { text: 'America/Guyana', value: 'America/Guyana' },
      {
        text: 'America/Halifax',
        value: 'America/Halifax',
      },
      { text: 'America/Havana', value: 'America/Havana' },
      {
        text: 'America/Hermosillo',
        value: 'America/Hermosillo',
      },
      {
        text: 'America/Indiana/Indianapolis',
        value: 'America/Indiana/Indianapolis',
      },
      {
        text: 'America/Indiana/Knox',
        value: 'America/Indiana/Knox',
      },
      {
        text: 'America/Indiana/Marengo',
        value: 'America/Indiana/Marengo',
      },
      {
        text: 'America/Indiana/Petersburg',
        value: 'America/Indiana/Petersburg',
      },
      {
        text: 'America/Indiana/Tell City',
        value: 'America/Indiana/Tell_City',
      },
      {
        text: 'America/Indiana/Vevay',
        value: 'America/Indiana/Vevay',
      },
      {
        text: 'America/Indiana/Vincennes',
        value: 'America/Indiana/Vincennes',
      },
      {
        text: 'America/Indiana/Winamac',
        value: 'America/Indiana/Winamac',
      },
      { text: 'America/Inuvik', value: 'America/Inuvik' },
      {
        text: 'America/Iqaluit',
        value: 'America/Iqaluit',
      },
      { text: 'America/Jamaica', value: 'America/Jamaica' },
      {
        text: 'America/Juneau',
        value: 'America/Juneau',
      },
      {
        text: 'America/Kentucky/Louisville',
        value: 'America/Kentucky/Louisville',
      },
      {
        text: 'America/Kentucky/Monticello',
        value: 'America/Kentucky/Monticello',
      },
      {
        text: 'America/Kralendijk',
        value: 'America/Kralendijk',
      },
      { text: 'America/La Paz', value: 'America/La_Paz' },
      {
        text: 'America/Lima',
        value: 'America/Lima',
      },
      {
        text: 'America/Los Angeles',
        value: 'America/Los_Angeles',
      },
      {
        text: 'America/Lower Princes',
        value: 'America/Lower_Princes',
      },
      { text: 'America/Maceio', value: 'America/Maceio' },
      {
        text: 'America/Managua',
        value: 'America/Managua',
      },
      { text: 'America/Manaus', value: 'America/Manaus' },
      {
        text: 'America/Marigot',
        value: 'America/Marigot',
      },
      {
        text: 'America/Martinique',
        value: 'America/Martinique',
      },
      {
        text: 'America/Matamoros',
        value: 'America/Matamoros',
      },
      {
        text: 'America/Mazatlan',
        value: 'America/Mazatlan',
      },
      {
        text: 'America/Menominee',
        value: 'America/Menominee',
      },
      { text: 'America/Merida', value: 'America/Merida' },
      {
        text: 'America/Metlakatla',
        value: 'America/Metlakatla',
      },
      {
        text: 'America/Mexico City',
        value: 'America/Mexico_City',
      },
      { text: 'America/Miquelon', value: 'America/Miquelon' },
      {
        text: 'America/Moncton',
        value: 'America/Moncton',
      },
      {
        text: 'America/Monterrey',
        value: 'America/Monterrey',
      },
      {
        text: 'America/Montevideo',
        value: 'America/Montevideo',
      },
      {
        text: 'America/Montserrat',
        value: 'America/Montserrat',
      },
      { text: 'America/Nassau', value: 'America/Nassau' },
      {
        text: 'America/New York',
        value: 'America/New_York',
      },
      { text: 'America/Nipigon', value: 'America/Nipigon' },
      {
        text: 'America/Nome',
        value: 'America/Nome',
      },
      {
        text: 'America/Noronha',
        value: 'America/Noronha',
      },
      {
        text: 'America/North Dakota/Beulah',
        value: 'America/North_Dakota/Beulah',
      },
      {
        text: 'America/North Dakota/Center',
        value: 'America/North_Dakota/Center',
      },
      {
        text: 'America/North Dakota/New Salem',
        value: 'America/North_Dakota/New_Salem',
      },
      { text: 'America/Nuuk', value: 'America/Nuuk' },
      {
        text: 'America/Ojinaga',
        value: 'America/Ojinaga',
      },
      { text: 'America/Panama', value: 'America/Panama' },
      {
        text: 'America/Pangnirtung',
        value: 'America/Pangnirtung',
      },
      {
        text: 'America/Paramaribo',
        value: 'America/Paramaribo',
      },
      {
        text: 'America/Phoenix',
        value: 'America/Phoenix',
      },
      {
        text: 'America/Port-au-Prince',
        value: 'America/Port-au-Prince',
      },
      {
        text: 'America/Port of Spain',
        value: 'America/Port_of_Spain',
      },
      {
        text: 'America/Porto Velho',
        value: 'America/Porto_Velho',
      },
      {
        text: 'America/Puerto Rico',
        value: 'America/Puerto_Rico',
      },
      {
        text: 'America/Punta Arenas',
        value: 'America/Punta_Arenas',
      },
      {
        text: 'America/Rainy River',
        value: 'America/Rainy_River',
      },
      {
        text: 'America/Rankin Inlet',
        value: 'America/Rankin_Inlet',
      },
      { text: 'America/Recife', value: 'America/Recife' },
      {
        text: 'America/Regina',
        value: 'America/Regina',
      },
      {
        text: 'America/Resolute',
        value: 'America/Resolute',
      },
      {
        text: 'America/Rio Branco',
        value: 'America/Rio_Branco',
      },
      {
        text: 'America/Santarem',
        value: 'America/Santarem',
      },
      {
        text: 'America/Santiago',
        value: 'America/Santiago',
      },
      {
        text: 'America/Santo Domingo',
        value: 'America/Santo_Domingo',
      },
      {
        text: 'America/Sao Paulo',
        value: 'America/Sao_Paulo',
      },
      {
        text: 'America/Scoresbysund',
        value: 'America/Scoresbysund',
      },
      { text: 'America/Sitka', value: 'America/Sitka' },
      {
        text: 'America/St Barthelemy',
        value: 'America/St_Barthelemy',
      },
      {
        text: 'America/St Johns',
        value: 'America/St_Johns',
      },
      {
        text: 'America/St Kitts',
        value: 'America/St_Kitts',
      },
      {
        text: 'America/St Lucia',
        value: 'America/St_Lucia',
      },
      {
        text: 'America/St Thomas',
        value: 'America/St_Thomas',
      },
      {
        text: 'America/St Vincent',
        value: 'America/St_Vincent',
      },
      {
        text: 'America/Swift Current',
        value: 'America/Swift_Current',
      },
      {
        text: 'America/Tegucigalpa',
        value: 'America/Tegucigalpa',
      },
      { text: 'America/Thule', value: 'America/Thule' },
      {
        text: 'America/Thunder Bay',
        value: 'America/Thunder_Bay',
      },
      { text: 'America/Tijuana', value: 'America/Tijuana' },
      {
        text: 'America/Toronto',
        value: 'America/Toronto',
      },
      { text: 'America/Tortola', value: 'America/Tortola' },
      {
        text: 'America/Vancouver',
        value: 'America/Vancouver',
      },
      {
        text: 'America/Whitehorse',
        value: 'America/Whitehorse',
      },
      { text: 'America/Winnipeg', value: 'America/Winnipeg' },
      {
        text: 'America/Yakutat',
        value: 'America/Yakutat',
      },
      {
        text: 'America/Yellowknife',
        value: 'America/Yellowknife',
      },
      {
        text: 'Antarctica/Casey',
        value: 'Antarctica/Casey',
      },
      {
        text: 'Antarctica/Davis',
        value: 'Antarctica/Davis',
      },
      {
        text: 'Antarctica/DumontDUrville',
        value: 'Antarctica/DumontDUrville',
      },
      {
        text: 'Antarctica/Macquarie',
        value: 'Antarctica/Macquarie',
      },
      {
        text: 'Antarctica/Mawson',
        value: 'Antarctica/Mawson',
      },
      {
        text: 'Antarctica/McMurdo',
        value: 'Antarctica/McMurdo',
      },
      {
        text: 'Antarctica/Palmer',
        value: 'Antarctica/Palmer',
      },
      {
        text: 'Antarctica/Rothera',
        value: 'Antarctica/Rothera',
      },
      {
        text: 'Antarctica/Syowa',
        value: 'Antarctica/Syowa',
      },
      {
        text: 'Antarctica/Troll',
        value: 'Antarctica/Troll',
      },
      {
        text: 'Antarctica/Vostok',
        value: 'Antarctica/Vostok',
      },
      { text: 'Arctic/Longyearbyen', value: 'Arctic/Longyearbyen' },
      {
        text: 'Asia/Aden',
        value: 'Asia/Aden',
      },
      { text: 'Asia/Almaty', value: 'Asia/Almaty' },
      {
        text: 'Asia/Amman',
        value: 'Asia/Amman',
      },
      { text: 'Asia/Anadyr', value: 'Asia/Anadyr' },
      {
        text: 'Asia/Aqtau',
        value: 'Asia/Aqtau',
      },
      { text: 'Asia/Aqtobe', value: 'Asia/Aqtobe' },
      {
        text: 'Asia/Ashgabat',
        value: 'Asia/Ashgabat',
      },
      { text: 'Asia/Atyrau', value: 'Asia/Atyrau' },
      {
        text: 'Asia/Baghdad',
        value: 'Asia/Baghdad',
      },
      { text: 'Asia/Bahrain', value: 'Asia/Bahrain' },
      {
        text: 'Asia/Baku',
        value: 'Asia/Baku',
      },
      { text: 'Asia/Bangkok', value: 'Asia/Bangkok' },
      {
        text: 'Asia/Barnaul',
        value: 'Asia/Barnaul',
      },
      { text: 'Asia/Beirut', value: 'Asia/Beirut' },
      {
        text: 'Asia/Bishkek',
        value: 'Asia/Bishkek',
      },
      { text: 'Asia/Brunei', value: 'Asia/Brunei' },
      {
        text: 'Asia/Chita',
        value: 'Asia/Chita',
      },
      { text: 'Asia/Choibalsan', value: 'Asia/Choibalsan' },
      {
        text: 'Asia/Colombo',
        value: 'Asia/Colombo',
      },
      { text: 'Asia/Damascus', value: 'Asia/Damascus' },
      {
        text: 'Asia/Dhaka',
        value: 'Asia/Dhaka',
      },
      { text: 'Asia/Dili', value: 'Asia/Dili' },
      {
        text: 'Asia/Dubai',
        value: 'Asia/Dubai',
      },
      { text: 'Asia/Dushanbe', value: 'Asia/Dushanbe' },
      {
        text: 'Asia/Famagusta',
        value: 'Asia/Famagusta',
      },
      { text: 'Asia/Gaza', value: 'Asia/Gaza' },
      {
        text: 'Asia/Hebron',
        value: 'Asia/Hebron',
      },
      { text: 'Asia/Ho Chi Minh', value: 'Asia/Ho_Chi_Minh' },
      {
        text: 'Asia/Hong Kong',
        value: 'Asia/Hong_Kong',
      },
      { text: 'Asia/Hovd', value: 'Asia/Hovd' },
      {
        text: 'Asia/Irkutsk',
        value: 'Asia/Irkutsk',
      },
      { text: 'Asia/Jakarta', value: 'Asia/Jakarta' },
      {
        text: 'Asia/Jayapura',
        value: 'Asia/Jayapura',
      },
      { text: 'Asia/Jerusalem', value: 'Asia/Jerusalem' },
      {
        text: 'Asia/Kabul',
        value: 'Asia/Kabul',
      },
      { text: 'Asia/Kamchatka', value: 'Asia/Kamchatka' },
      {
        text: 'Asia/Karachi',
        value: 'Asia/Karachi',
      },
      { text: 'Asia/Kathmandu', value: 'Asia/Kathmandu' },
      {
        text: 'Asia/Khandyga',
        value: 'Asia/Khandyga',
      },
      { text: 'Asia/Kolkata', value: 'Asia/Kolkata' },
      {
        text: 'Asia/Krasnoyarsk',
        value: 'Asia/Krasnoyarsk',
      },
      { text: 'Asia/Kuala Lumpur', value: 'Asia/Kuala_Lumpur' },
      {
        text: 'Asia/Kuching',
        value: 'Asia/Kuching',
      },
      { text: 'Asia/Kuwait', value: 'Asia/Kuwait' },
      {
        text: 'Asia/Macau',
        value: 'Asia/Macau',
      },
      { text: 'Asia/Magadan', value: 'Asia/Magadan' },
      {
        text: 'Asia/Makassar',
        value: 'Asia/Makassar',
      },
      { text: 'Asia/Manila', value: 'Asia/Manila' },
      {
        text: 'Asia/Muscat',
        value: 'Asia/Muscat',
      },
      { text: 'Asia/Nicosia', value: 'Asia/Nicosia' },
      {
        text: 'Asia/Novokuznetsk',
        value: 'Asia/Novokuznetsk',
      },
      { text: 'Asia/Novosibirsk', value: 'Asia/Novosibirsk' },
      {
        text: 'Asia/Omsk',
        value: 'Asia/Omsk',
      },
      { text: 'Asia/Oral', value: 'Asia/Oral' },
      {
        text: 'Asia/Phnom Penh',
        value: 'Asia/Phnom_Penh',
      },
      { text: 'Asia/Pontianak', value: 'Asia/Pontianak' },
      {
        text: 'Asia/Pyongyang',
        value: 'Asia/Pyongyang',
      },
      { text: 'Asia/Qatar', value: 'Asia/Qatar' },
      {
        text: 'Asia/Qostanay',
        value: 'Asia/Qostanay',
      },
      { text: 'Asia/Qyzylorda', value: 'Asia/Qyzylorda' },
      {
        text: 'Asia/Riyadh',
        value: 'Asia/Riyadh',
      },
      { text: 'Asia/Sakhalin', value: 'Asia/Sakhalin' },
      {
        text: 'Asia/Samarkand',
        value: 'Asia/Samarkand',
      },
      { text: 'Asia/Seoul', value: 'Asia/Seoul' },
      {
        text: 'Asia/Shanghai',
        value: 'Asia/Shanghai',
      },
      { text: 'Asia/Singapore', value: 'Asia/Singapore' },
      {
        text: 'Asia/Srednekolymsk',
        value: 'Asia/Srednekolymsk',
      },
      { text: 'Asia/Taipei', value: 'Asia/Taipei' },
      {
        text: 'Asia/Tashkent',
        value: 'Asia/Tashkent',
      },
      { text: 'Asia/Tbilisi', value: 'Asia/Tbilisi' },
      {
        text: 'Asia/Tehran',
        value: 'Asia/Tehran',
      },
      { text: 'Asia/Thimphu', value: 'Asia/Thimphu' },
      {
        text: 'Asia/Tokyo',
        value: 'Asia/Tokyo',
      },
      { text: 'Asia/Tomsk', value: 'Asia/Tomsk' },
      {
        text: 'Asia/Ulaanbaatar',
        value: 'Asia/Ulaanbaatar',
      },
      { text: 'Asia/Urumqi', value: 'Asia/Urumqi' },
      {
        text: 'Asia/Ust-Nera',
        value: 'Asia/Ust-Nera',
      },
      { text: 'Asia/Vientiane', value: 'Asia/Vientiane' },
      {
        text: 'Asia/Vladivostok',
        value: 'Asia/Vladivostok',
      },
      { text: 'Asia/Yakutsk', value: 'Asia/Yakutsk' },
      {
        text: 'Asia/Yangon',
        value: 'Asia/Yangon',
      },
      {
        text: 'Asia/Yekaterinburg',
        value: 'Asia/Yekaterinburg',
      },
      { text: 'Asia/Yerevan', value: 'Asia/Yerevan' },
      {
        text: 'Atlantic/Azores',
        value: 'Atlantic/Azores',
      },
      { text: 'Atlantic/Bermuda', value: 'Atlantic/Bermuda' },
      {
        text: 'Atlantic/Canary',
        value: 'Atlantic/Canary',
      },
      {
        text: 'Atlantic/Cape Verde',
        value: 'Atlantic/Cape_Verde',
      },
      { text: 'Atlantic/Faroe', value: 'Atlantic/Faroe' },
      {
        text: 'Atlantic/Madeira',
        value: 'Atlantic/Madeira',
      },
      {
        text: 'Atlantic/Reykjavik',
        value: 'Atlantic/Reykjavik',
      },
      {
        text: 'Atlantic/South Georgia',
        value: 'Atlantic/South_Georgia',
      },
      {
        text: 'Atlantic/St Helena',
        value: 'Atlantic/St_Helena',
      },
      {
        text: 'Atlantic/Stanley',
        value: 'Atlantic/Stanley',
      },
      {
        text: 'Australia/Adelaide',
        value: 'Australia/Adelaide',
      },
      {
        text: 'Australia/Brisbane',
        value: 'Australia/Brisbane',
      },
      {
        text: 'Australia/Broken Hill',
        value: 'Australia/Broken_Hill',
      },
      {
        text: 'Australia/Currie',
        value: 'Australia/Currie',
      },
      { text: 'Australia/Darwin', value: 'Australia/Darwin' },
      {
        text: 'Australia/Eucla',
        value: 'Australia/Eucla',
      },
      {
        text: 'Australia/Hobart',
        value: 'Australia/Hobart',
      },
      {
        text: 'Australia/Lindeman',
        value: 'Australia/Lindeman',
      },
      {
        text: 'Australia/Lord Howe',
        value: 'Australia/Lord_Howe',
      },
      {
        text: 'Australia/Melbourne',
        value: 'Australia/Melbourne',
      },
      { text: 'Australia/Perth', value: 'Australia/Perth' },
      {
        text: 'Australia/Sydney',
        value: 'Australia/Sydney',
      },
      { text: 'Europe/Amsterdam', value: 'Europe/Amsterdam' },
      {
        text: 'Europe/Andorra',
        value: 'Europe/Andorra',
      },
      { text: 'Europe/Astrakhan', value: 'Europe/Astrakhan' },
      {
        text: 'Europe/Athens',
        value: 'Europe/Athens',
      },
      { text: 'Europe/Belgrade', value: 'Europe/Belgrade' },
      {
        text: 'Europe/Berlin',
        value: 'Europe/Berlin',
      },
      {
        text: 'Europe/Bratislava',
        value: 'Europe/Bratislava',
      },
      { text: 'Europe/Brussels', value: 'Europe/Brussels' },
      {
        text: 'Europe/Bucharest',
        value: 'Europe/Bucharest',
      },
      { text: 'Europe/Budapest', value: 'Europe/Budapest' },
      {
        text: 'Europe/Busingen',
        value: 'Europe/Busingen',
      },
      { text: 'Europe/Chisinau', value: 'Europe/Chisinau' },
      {
        text: 'Europe/Copenhagen',
        value: 'Europe/Copenhagen',
      },
      { text: 'Europe/Dublin', value: 'Europe/Dublin' },
      {
        text: 'Europe/Gibraltar',
        value: 'Europe/Gibraltar',
      },
      { text: 'Europe/Guernsey', value: 'Europe/Guernsey' },
      {
        text: 'Europe/Helsinki',
        value: 'Europe/Helsinki',
      },
      {
        text: 'Europe/Isle of Man',
        value: 'Europe/Isle_of_Man',
      },
      { text: 'Europe/Istanbul', value: 'Europe/Istanbul' },
      {
        text: 'Europe/Jersey',
        value: 'Europe/Jersey',
      },
      { text: 'Europe/Kaliningrad', value: 'Europe/Kaliningrad' },
      {
        text: 'Europe/Kiev',
        value: 'Europe/Kiev',
      },
      { text: 'Europe/Kirov', value: 'Europe/Kirov' },
      {
        text: 'Europe/Lisbon',
        value: 'Europe/Lisbon',
      },
      { text: 'Europe/Ljubljana', value: 'Europe/Ljubljana' },
      {
        text: 'Europe/London',
        value: 'Europe/London',
      },
      { text: 'Europe/Luxembourg', value: 'Europe/Luxembourg' },
      {
        text: 'Europe/Madrid',
        value: 'Europe/Madrid',
      },
      { text: 'Europe/Malta', value: 'Europe/Malta' },
      {
        text: 'Europe/Mariehamn',
        value: 'Europe/Mariehamn',
      },
      { text: 'Europe/Minsk', value: 'Europe/Minsk' },
      {
        text: 'Europe/Monaco',
        value: 'Europe/Monaco',
      },
      { text: 'Europe/Moscow', value: 'Europe/Moscow' },
      {
        text: 'Europe/Oslo',
        value: 'Europe/Oslo',
      },
      { text: 'Europe/Paris', value: 'Europe/Paris' },
      {
        text: 'Europe/Podgorica',
        value: 'Europe/Podgorica',
      },
      { text: 'Europe/Prague', value: 'Europe/Prague' },
      {
        text: 'Europe/Riga',
        value: 'Europe/Riga',
      },
      { text: 'Europe/Rome', value: 'Europe/Rome' },
      {
        text: 'Europe/Samara',
        value: 'Europe/Samara',
      },
      {
        text: 'Europe/San Marino',
        value: 'Europe/San_Marino',
      },
      { text: 'Europe/Sarajevo', value: 'Europe/Sarajevo' },
      {
        text: 'Europe/Saratov',
        value: 'Europe/Saratov',
      },
      { text: 'Europe/Simferopol', value: 'Europe/Simferopol' },
      {
        text: 'Europe/Skopje',
        value: 'Europe/Skopje',
      },
      { text: 'Europe/Sofia', value: 'Europe/Sofia' },
      {
        text: 'Europe/Stockholm',
        value: 'Europe/Stockholm',
      },
      { text: 'Europe/Tallinn', value: 'Europe/Tallinn' },
      {
        text: 'Europe/Tirane',
        value: 'Europe/Tirane',
      },
      { text: 'Europe/Ulyanovsk', value: 'Europe/Ulyanovsk' },
      {
        text: 'Europe/Uzhgorod',
        value: 'Europe/Uzhgorod',
      },
      { text: 'Europe/Vaduz', value: 'Europe/Vaduz' },
      {
        text: 'Europe/Vatican',
        value: 'Europe/Vatican',
      },
      { text: 'Europe/Vienna', value: 'Europe/Vienna' },
      {
        text: 'Europe/Vilnius',
        value: 'Europe/Vilnius',
      },
      { text: 'Europe/Volgograd', value: 'Europe/Volgograd' },
      {
        text: 'Europe/Warsaw',
        value: 'Europe/Warsaw',
      },
      { text: 'Europe/Zagreb', value: 'Europe/Zagreb' },
      {
        text: 'Europe/Zaporozhye',
        value: 'Europe/Zaporozhye',
      },
      { text: 'Europe/Zurich', value: 'Europe/Zurich' },
      {
        text: 'Indian/Antananarivo',
        value: 'Indian/Antananarivo',
      },
      { text: 'Indian/Chagos', value: 'Indian/Chagos' },
      {
        text: 'Indian/Christmas',
        value: 'Indian/Christmas',
      },
      { text: 'Indian/Cocos', value: 'Indian/Cocos' },
      {
        text: 'Indian/Comoro',
        value: 'Indian/Comoro',
      },
      { text: 'Indian/Kerguelen', value: 'Indian/Kerguelen' },
      {
        text: 'Indian/Mahe',
        value: 'Indian/Mahe',
      },
      { text: 'Indian/Maldives', value: 'Indian/Maldives' },
      {
        text: 'Indian/Mauritius',
        value: 'Indian/Mauritius',
      },
      { text: 'Indian/Mayotte', value: 'Indian/Mayotte' },
      {
        text: 'Indian/Reunion',
        value: 'Indian/Reunion',
      },
      { text: 'Pacific/Apia', value: 'Pacific/Apia' },
      {
        text: 'Pacific/Auckland',
        value: 'Pacific/Auckland',
      },
      {
        text: 'Pacific/Bougainville',
        value: 'Pacific/Bougainville',
      },
      { text: 'Pacific/Chatham', value: 'Pacific/Chatham' },
      {
        text: 'Pacific/Chuuk',
        value: 'Pacific/Chuuk',
      },
      { text: 'Pacific/Easter', value: 'Pacific/Easter' },
      {
        text: 'Pacific/Efate',
        value: 'Pacific/Efate',
      },
      {
        text: 'Pacific/Enderbury',
        value: 'Pacific/Enderbury',
      },
      { text: 'Pacific/Fakaofo', value: 'Pacific/Fakaofo' },
      {
        text: 'Pacific/Fiji',
        value: 'Pacific/Fiji',
      },
      {
        text: 'Pacific/Funafuti',
        value: 'Pacific/Funafuti',
      },
      {
        text: 'Pacific/Galapagos',
        value: 'Pacific/Galapagos',
      },
      {
        text: 'Pacific/Gambier',
        value: 'Pacific/Gambier',
      },
      {
        text: 'Pacific/Guadalcanal',
        value: 'Pacific/Guadalcanal',
      },
      { text: 'Pacific/Guam', value: 'Pacific/Guam' },
      {
        text: 'Pacific/Honolulu',
        value: 'Pacific/Honolulu',
      },
      {
        text: 'Pacific/Kiritimati',
        value: 'Pacific/Kiritimati',
      },
      { text: 'Pacific/Kosrae', value: 'Pacific/Kosrae' },
      {
        text: 'Pacific/Kwajalein',
        value: 'Pacific/Kwajalein',
      },
      { text: 'Pacific/Majuro', value: 'Pacific/Majuro' },
      {
        text: 'Pacific/Marquesas',
        value: 'Pacific/Marquesas',
      },
      { text: 'Pacific/Midway', value: 'Pacific/Midway' },
      {
        text: 'Pacific/Nauru',
        value: 'Pacific/Nauru',
      },
      { text: 'Pacific/Niue', value: 'Pacific/Niue' },
      {
        text: 'Pacific/Norfolk',
        value: 'Pacific/Norfolk',
      },
      { text: 'Pacific/Noumea', value: 'Pacific/Noumea' },
      {
        text: 'Pacific/Pago Pago',
        value: 'Pacific/Pago_Pago',
      },
      { text: 'Pacific/Palau', value: 'Pacific/Palau' },
      {
        text: 'Pacific/Pitcairn',
        value: 'Pacific/Pitcairn',
      },
      {
        text: 'Pacific/Pohnpei',
        value: 'Pacific/Pohnpei',
      },
      {
        text: 'Pacific/Port Moresby',
        value: 'Pacific/Port_Moresby',
      },
      {
        text: 'Pacific/Rarotonga',
        value: 'Pacific/Rarotonga',
      },
      { text: 'Pacific/Saipan', value: 'Pacific/Saipan' },
      {
        text: 'Pacific/Tahiti',
        value: 'Pacific/Tahiti',
      },
      { text: 'Pacific/Tarawa', value: 'Pacific/Tarawa' },
      {
        text: 'Pacific/Tongatapu',
        value: 'Pacific/Tongatapu',
      },
      { text: 'Pacific/Wake', value: 'Pacific/Wake' },
      {
        text: 'Pacific/Wallis',
        value: 'Pacific/Wallis',
      },
      { text: 'UTC', value: 'UTC' },
    ],
    innerValue: '',
  }),
  computed: {
    timezones() {
      const tzNames = moment.tz.names().sort()
      return tzNames.map((tz) => {
        return {
          text: `(UTC${moment.tz(tz).format('Z')}) ${tz}`,
          value: tz,
        }
      })
    },
  },
  watch: {
    // Handles internal model changes.
    innerValue(newVal) {
      this.$emit('input', newVal)
    },
    // Handles external model changes.
    value(newVal) {
      this.innerValue = newVal
    },
  },
  created() {
    if (this.value) {
      this.innerValue = this.value
    }
  },
  methods: {},
}
</script>
