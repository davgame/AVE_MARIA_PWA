<template>

    <!-- Main modal -->
    <div
        id="select-modal"
        tabindex="-1"
        :class="{ hidden: !modalVisible }"
        aria-hidden="true"
        class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative p-4 w-full max-w-md max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-[#070707]">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                        Ваше местоположение
                    </h3>
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="select-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Close mod</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-4 md:p-5">
                    <p class="text-gray-500 dark:text-gray-400 mb-4">Выберите город</p>
                    <ul class="space-y-4 mb-4">
                        <li>
                            <input type="radio" id="job-1" name="job" value="job-1" class="hidden peer" required />
                            <label for="job-1" class="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-[#141414] dark:hover:bg-gray-500">                           
                                <div class="block">
                                    <div class="w-full text-lg font-bold text-left">Москва</div>
                                    <div class="w-full text-gray-500 dark:text-gray-400 text-left">AVE MARIA</div>
                                </div>
                                <box-icon name='map' color='#4286F7' ></box-icon>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="job-2" name="job" value="job-2" class="hidden peer">
                            <label for="job-2" class="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-[#141414] dark:hover:bg-gray-500">
                                <div class="block">
                                    <div class="w-full text-lg font-bold">Санкт-Петербург</div>
                                    <div class="w-full text-gray-500 dark:text-gray-400 text-left">AVE MARIA</div>
                                </div>
                                <box-icon name='map' color='#4286F7' ></box-icon>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="job-3" name="job" value="job-3" class="hidden peer">
                            <label for="job-3" class="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-[#141414] dark:hover:bg-gray-500">
                                <div class="block">
                                    <div class="w-full text-lg font-bold">Краснодар</div>
                                    <div class="w-full text-gray-500 text-left dark:text-gray-400">AVE MARIA</div>
                                </div>
                                <box-icon name='map' color='#4286F7' ></box-icon>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="job-3" name="job" value="job-3" class="hidden peer">
                            <label for="job-3" class="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-[#141414] dark:hover:bg-gray-500">
                                <div class="block">
                                    <div class="w-full text-lg font-bold">Екатеринбург</div>
                                    <div class="w-full text-gray-500 text-left dark:text-gray-400">AVE MARIA</div>
                                </div>
                                <box-icon name='map' color='#4286F7' ></box-icon>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div> 
    
    </template>
    
    <script>
    import {ref } from "vue";
    
    
    export default {
      setup() {
        const modalVisible = ref(false);
    
        const openModal = () => {
          modalVisible.value = true;
        };
    
        const closeModal = () => {
          modalVisible.value = false;
        };
       
        return {
          openModal,
          closeModal,
        };
      }
    };
    
    </script>