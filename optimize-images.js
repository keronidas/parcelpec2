
import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';

(async () => {
  await imagemin(['src/assets/images/*.{jpg,png}'], {
    destination: 'src/assets/images',  // Sobrescribir en la misma carpeta
    plugins: [
      imageminJpegtran({ progressive: true, quality: [0.1, 0.3] }),

      imageminPngquant({ quality: [0.1, 0.3] })  

    ]
  });
})();
