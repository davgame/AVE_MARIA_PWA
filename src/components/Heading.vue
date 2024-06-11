<template>
    <div class="flex flex-col sm:flex-col lg:mt-20 mt-14">
        <div class="flex lg:flex-row flex-col lg:gap-x-80 ">
            <div class="order-1 sm:order-1">
                <p class="text-left mt-11 mb-4 md:text-7xl text-6xl lg:font-bold leading-none tracking-tight text-gray-900  lg:text-8xl dark:text-white font-Rubik">AVE <span class="text-[#4286F7] dark:text-[#4286F7] md:text-7xl lg:text-8xl">MARIA</span></p>
                <img src="../images/AutoSchool.png" class=" mt-7 mb-14 lg:block hidden" alt="dfdf" srcset="">
                <img src="../images/AutoSchool_mini.png" class="sm:mt-4 mb-12 lg:hidden sm:block" alt="dfdf" srcset="">
            </div>

            <div class="hidden lg:block order-2 w-64 h-44 mt-12 ml-28 px-9 py-7 bg-[#4286F7] rounded-2xl">
                <button @click="downloadPdf" class="bg-white text-[#4286F7] font-bold py-2 px-9 rounder-lg inline-flex items-center">
                    <svg class="w-6 h-6 mr-2 text-[#4286F7] dark:text-slate-400 md:dark:text-[#4286F7]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/>
                    </svg>
                    <span>СКАЧАТЬ</span>
                </button>
                <h5 class="text-left mt-3 mb-1 text-xl font-bold tracking-tight text-white">ЛИЦЕНЗИЯ</h5>
                <p class=" text-sm text-left font-medium text-[#ECECEC]">Лицензионное соглашение автошколы AVE MARIA</p>
            </div>
        </div>
    </div>
    <div class="order-2 sm:order-2">
        <video class="block-3 order-3 sm:order-1 border border-gray-200 rounded-lg dark:border-gray-700 w-full h-auto " autoplay muted controls>
        <source src="../videos/CYBERTRUCK.mp4" type="video/mp4">
    Your browser does not support the video tag.
        </video>
    </div>
    <div class="lg:hidden sm:block order-3 sm:order-2 w-full h-44 mt-14 px-9 py-7 bg-[#4286F7] rounded-2xl">
        <button class="bg-white text-[#4286F7] font-bold py-2 px-16 rounder-lg inline-flex items-center">
            <svg class="w-6 h-6 mr-2 text-[#4286F7] dark:text-[#4286F7]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/>
            </svg>
            <span>СКАЧАТЬ</span>
        </button>
        <h5 class="text-left mt-3 mb-1 text-xl ml-2 font-bold tracking-tight text-white dark:text-white">ЛИЦЕНЗИЯ</h5>
        <p class=" text-sm text-left ml-2 font-medium text-[#ECECEC] dark:text-[#ECECEC]">Лицензионное соглашение автошколы AVE MARIA</p>
    </div>
</template>

<script>
export default {
  methods: {
    downloadPdf() {
      const link = document.createElement('a');
      link.href = '/licenzia.pdf';
      link.download = 'licenzia.pdf';
      link.click();
    }
  }
};
</script>

