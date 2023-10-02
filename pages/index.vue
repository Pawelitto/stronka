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
          <input class="font-inter bg-black focus:bg-black focus:outline-none w-full h-full rounded text-white text-center placeholder:text-white placeholder:font-normal placeholder:text-xl placeholder:tracking-wider" type="text" placeholder="SZUKAJ">
        </div>
      </div>
    </div>


    <div class="absolute left-20 top-60 z-[35] w-[23%] h-[50vh] text-white">

      <div class="mb-8">
        <span class="text-8xl font-monda">Stranger Things</span>
      </div>

      <div class="flex font-signika text-[#B7B7B7] ml-2 items-center">

        <span class="font-m">2016</span>
        <div class="mx-4 h-[30px] bg-[#B7B7B7] rounded-full w-px">
        </div>

        <span class="font-m">5 sezonów</span>
        <div class="mx-4 h-[30px] bg-[#B7B7B7] rounded-full w-px">
        </div>

        <span class="font-m">Dramat, Sci-Fi, Horror</span>


      </div>

      <div class="mt-2" >
        <span class="font-dm-sans text-[20px]">
          Podczas powrotu do domu znika dwunastoletni Will Byers. Zaginięcie chłopca jest początkiem dziwnych i niebezpiecznych wydarzeń trapiących prowincjonalne miasteczko.
        </span>
      </div>

      <div class="mt-6 flex">
        <button class="w-[144px] h-[45px] bg-[#FF1B22] outline  outline-[#430D0D] flex items-center justify-center rounded font-inter">

          <img class="mr-2" src="/img/play.png" alt="play button">
          OGLĄDAJ

        </button>

        <button class="ml-10 w-[180px] h-[45px] flex items-center outline justify-center rounded font-inter">

          <img class="mr-2" src="/img/info.png" alt="play button">
          DOWIEDZ SIĘ WIĘCEJ

        </button>
      </div>

    </div>

    <div class="absolute left-20 bottom-10 z-[35] w-[23%] text-white">
      <button class=" text-white font-bold flex items-center justify-center">
        <div class="mr-3 relative w-8 h-8 mx-auto">
          <div class="absolute inset-0 flex items-center justify-center border-2 border-white rounded-full"></div>
          <span class="absolute inset-0 flex items-center justify-center">
            <img src="/img/play_ico.png" alt="Play Logo" class="h-6 w-6">
          </span>
        </div>
        ODWTÓRZ ZWIASTUN
      </button>
    </div>



    <div class="absolute w-screen h-screen bg-[url('/img/shadow.png')] bg-no-repeat bg-cover bg-center z-[30]"></div>
    <img class="object-cover min-h-screen absolute bottom-0 w-full z-[10]" src="/img/Poster.png" alt="tlo" />
  </div>
</template>