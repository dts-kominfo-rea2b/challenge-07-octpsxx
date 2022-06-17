const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (Emotion) => {
  const Marah = [];
  const tidakMarah = [];

  try {
    const getEmotionIXX = await promiseTheaterIXX(Emotion);
    const getEmotionVGC = await promiseTheaterVGC(Emotion);

    if (Emotion == "tidak marah"){
      //cari result yg tidak marah 
      const getValEmotionIXX = getEmotionIXX.filter((x) => x.hasil == "tidak marah");
      const getValEmotionVGC = getEmotionVGC.filter((x) => x.hasil == "tidak marah");

      //hasil di push ke array tidak marah
      getValEmotionIXX.map((x) => tidakMarah.push(x));
      getValEmotionVGC.map((x) => tidakMarah.push(x));

      //return hasil total yg tidak marah
      return tidakMarah.length;
    }

    if (Emotion == "marah"){
      //cari result marah
      const getValEmotionIXX = getEmotionIXX.filter((x) => x.hasil == "marah");
      const getValEmotionVGC = getEmotionVGC.filter((x) => x.hasil == "marah");

      //hasil marah di push ke array marah
      getValEmotionIXX.map((x) => Marah.push(x));
      getValEmotionVGC.map((x) => Marah.push(x));

      //return hasil total yg marah 
      return Marah.length;
    }
  }
  catch (reject){
    console.log(reject);
  }

};

module.exports = {
  promiseOutput,
};
