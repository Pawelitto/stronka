<template>
  <div class="w-screen h-screen relative">
    <div class="absolute top-0 right-0 h-[110px] flex justify-end items-center bg-black bg-opacity-50 w-full z-[100]">
      <div class="flex bg-black bg-opacity-100 text-white h-[54px] w-[443px] rounded-lg mr-5 border-4 border-[#D64045] shadow-custom items-center">
        <div class="w-[10%] mx-auto">
          <img src="/img/Magnifier.png" class="w-[32px] h-[32px] mx-auto" alt="search" />
        </div>  
        <div class="h-[90%] bg-[#313131] rounded-full w-0.5">
        </div>

        <div class="w-[89%] h-full">
          <input class="bg-black focus:bg-black focus:outline-none w-full h-full rounded text-white text-center placeholder:text-white placeholder:font-normal placeholder:text-xl placeholder:tracking-wider" type="text" placeholder="SZUKAJ">
        </div>
      </div>
    </div>


    <div></div>


    <div class="absolute w-screen h-screen bg-[url('/img/shadow.png')] bg-no-repeat bg-cover bg-center z-[30]"></div>
    <img class="object-cover min-h-screen absolute bottom-0 w-full z-[10]" src="/img/Poster.png" alt="tlo" />
  </div>
</template>