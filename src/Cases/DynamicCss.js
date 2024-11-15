
// export const handleScreenWidthTS = (width) => {
//     switch (true) {
//       case width >= 1920:
//         return '1920px or larger';
//       case width >= 1600:
//         return '1600px';
//       case width >= 1440:
//         return '1440px';
//       case width >= 1366:
//         return '1366px';
//       case width >= 1024:
//         return '1024px';
//       case width >= 768:
//         return '768px';
//       case width >= 425:
//         return '425px';
//       case width >= 375:
//         return '375px';
//       default:
//         return 'Smaller than 375px';
//     }
//   };


export const handleScreenWidthTS = (width, imageName) => {
  switch (imageName) {
    case 'btn11':
      switch (true) {
        case width >= 1920:

          return { margintop: '32', marginleft: '10' };




        case width >= 1600:
          return '1600px';
        case width >= 1440:


          return { margintop: '35', marginleft: '10' };





        case width >= 1366:
          return { margintop: '33', marginleft: '10' };

        case width >= 1300:
          return { margintop: '30', marginleft: '10' };

        case width >= 1280:
          return { margintop: '49', marginleft: '12' };

        case width >= 1200:
          console.log({ margintop: '55', marginleft: '10', backgroundSize: '168% !important' })
          return { margintop: '55', marginleft: '10', backgroundSize: '180% !important' };



        case width >= 1024:
          return '1024px';
        case width >= 768:
          return '768px';
        case width >= 425:
          return '425px';
        case width >= 375:
          return '375px';
        default:
          return 'Smaller than 375px';
      }

    case 'btn4':
      switch (true) {
        case width >= 1920:
          return { margintop: '20', marginleft: '12' };
        case width >= 1600:
          return { margintop: '20', marginleft: '12' };
        case width >= 1440:
          return { margintop: '20', marginleft: '12' };
        case width >= 1366:
          return { margintop: '10', marginleft: '0' };
        case width >= 1280:
          return { margintop: '38', marginleft: '10' };
        case width >= 1024:
          return { margintop: '38', marginleft: '10' };
          // return { margintop: '38', marginleft: '10',  qrwidth: '200px' };
        case width >= 768:
          return '600px';
        case width >= 425:
          return '500px';
        case width >= 375:
          return '450px';
        default:
          return 'Smaller than 375px';
      }



    case 'btn5':
      switch (true) {
        case width >= 1920:
          return { margintop: '20', marginleft: '15' };
        case width >= 1600:
          return '1200px';  // Custom value for img3 at 1600 width
        case width >= 1440:
          return '1000px';
        case width >= 1366:
          return '800px';
        case width >= 1024:
          return '700px';
        case width >= 768:
          return '600px';
        case width >= 425:
          return '500px';
        case width >= 375:
          return '450px';
        default:
          return 'Smaller than 375px';
      }


    case 'btn9':
      switch (true) {
        case width >= 1920:
          return { margintop: '25', marginleft: '12' };
        case width >= 1600:
          return '1200px';  // Custom value for img3 at 1600 width
        case width >= 1440:
          return '1000px';
        case width >= 1366:
          return { margintop: '25', marginleft: '12' };
        case width >= 1300:
          return { margintop: '25', marginleft: '12' };
        case width >= 1280:
          return { margintop: '39', marginleft: '12' };
        case width >= 1024:
          return '700px';
        case width >= 768:
          return '600px';
        case width >= 425:
          return '500px';
        case width >= 375:
          return '450px';
        default:
          return 'Smaller than 375px';
      }



    case 'btn10':
      switch (true) {
        case width >= 1920:
          return { margintop: '30', marginleft: '13' };
        case width >= 1600:
          return '1200px';  // Custom value for img3 at 1600 width
        case width >= 1440:
          return '1000px';
        case width >= 1366:
          return { margintop: '30', marginleft: '13' };
        case width >= 1024:
          return '700px';
        case width >= 768:
          return '600px';
        case width >= 425:
          return '500px';
        case width >= 375:
          return '450px';
        default:
          return 'Smaller than 375px';
      }



    case 'btn7':
      switch (true) {
        case width >= 1920:
          return { margintop: '50', marginleft: '13' };
        case width >= 1600:
          return '1200px';  // Custom value for img3 at 1600 width
        case width >= 1440:
          return '1000px';
        case width >= 1366:
          return { margintop: '50', marginleft: '13' };
        case width >= 1300:
          return { margintop: '45', marginleft: '13' };
        case width >= 1280:
          return { margintop: '65', marginleft: '13' };
        case width >= 1024:
          return { margintop: '55', marginleft: '13' };
        case width >= 768:
          return '600px';
        case width >= 425:
          return '500px';
        case width >= 375:
          return '450px';
        default:
          return 'Smaller than 375px';
      }




    case 'btn12':
      switch (true) {
        case width >= 1920:
          return { margintop: '42', marginleft: '13' };
        case width >= 1600:
          return '1200px';  // Custom value for img3 at 1600 width
        case width >= 1440:
          return '1000px';
        case width >= 1366:
          return '800px';
        case width >= 1280:
          return { margintop: '42', marginleft: '13' };
        case width >= 1024:
          return '700px';
        case width >= 768:
          return '600px';
        case width >= 425:
          return '500px';
        case width >= 375:
          return '450px';
        default:
          return 'Smaller than 375px';
      }


    case 'btn15':
      switch (true) {
        case width >= 1920:
          return { margintop: '45', marginleft: '16' };
        case width >= 1600:
          return '1200px';  // Custom value for img3 at 1600 width
        case width >= 1440:
          return '1000px';
        case width >= 1366:
          return '800px';
        case width >= 1280:
          return { margintop: '48', marginleft: '16' };
        case width >= 1024:
          return '700px';
        case width >= 768:
          return '600px';
        case width >= 425:
          return '500px';
        case width >= 375:
          return '450px';
        default:
          return 'Smaller than 375px';
      }



    case 'btn19':
      switch (true) {
        case width >= 1920:
          return { margintop: '52', marginleft: '0' };
        case width >= 1600:
          return '1200px';  // Custom value for img3 at 1600 width
        case width >= 1440:
          return { margintop: '47', marginleft: '0' };
        case width >= 1366:
          return { margintop: '47', marginleft: '0' };
        case width >= 1300:
          return { margintop: '47', marginleft: '0' };
        case width >= 1024:
          return '700px';
        case width >= 768:
          return '600px';
        case width >= 425:
          return '500px';
        case width >= 375:
          return '450px';
        default:
          return 'Smaller than 375px';
      }



    case 'btn17':
      switch (true) {
        case width >= 1920:
          return { margintop: '72', marginleft: '-34' };
        case width >= 1600:
          return '1200px';
        case width >= 1440:
          return { margintop: '74', marginleft: '-31' };
        case width >= 1366:
          return { margintop: '74', marginleft: '-30' };
        case width >= 1280:
          return { margintop: '74', marginleft: '-30' };
        case width >= 1024:
          return { margintop: '77', marginleft: '-20' };
        case width >= 768:
          return '600px';
        case width >= 425:
          return '500px';
        case width >= 375:
          return '450px';
        default:
          return 'Smaller than 375px';
      }



    case 'btn20':
      switch (true) {
        case width >= 1920:
          return { margintop: '40', marginleft: '10' };
        case width >= 1600:
          return '1200px';  // Custom value for img3 at 1600 width
        case width >= 1440:
          return { margintop: '44', marginleft: '0' };
        case width >= 1366:
          return { margintop: '44', marginleft: '0' };
        case width >= 1280:
          return { margintop: '54', marginleft: '0' };
        case width >= 1024:
          return { margintop: '50', marginleft: '0' };
        case width >= 768:
          return '600px';
        case width >= 425:
          return '500px';
        case width >= 375:
          return '450px';
        default:
          return 'Smaller than 375px';
      }


    case 'btn21':
      switch (true) {
        case width >= 1920:
          return { margintop: '44', marginleft: '1' };
        case width >= 1600:
          return '1200px';  // Custom value for img3 at 1600 width
        case width >= 1440:
          return '1000px';
        case width >= 1366:
          return { margintop: '44', marginleft: '3' };
        case width >= 1300:
          return { margintop: '44', marginleft: '3' };
        case width >= 1024:
          return '700px';
        case width >= 768:
          return '600px';
        case width >= 425:
          return '500px';
        case width >= 375:
          return '450px';
        default:
          return 'Smaller than 375px';
      }




    case 'btn18':
      switch (true) {
        case width >= 1920:
          return { margintop: '59', marginleft: '36' };
        case width >= 1600:
          return '1200px';  // Custom value for img3 at 1600 width
        case width >= 1440:
          return { margintop: '59', marginleft: '36' };
        case width >= 1366:
          return { margintop: '59', marginleft: '36' };
        case width >= 1280:
          return { margintop: '59', marginleft: '36' };
        case width >= 1024:
          return '700px';
        case width >= 768:
          return '600px';
        case width >= 425:
          return '500px';
        case width >= 375:
          return '450px';
        default:
          return 'Smaller than 375px';
      }



    case 'btn16':
      switch (true) {
        case width >= 1920:
          return { margintop: '-9', marginleft: '-64' };
        case width >= 1600:
          return '1200px';  // Custom value for img3 at 1600 width
        case width >= 1440:
          return { margintop: '0', marginleft: '-50' };
        case width >= 1366:
          return { margintop: '0', marginleft: '-50' };
        case width >= 1280:
          return { margintop: '0', marginleft: '-50' };
        case width >= 1024:
          return { margintop: '0', marginleft: '-50' };
        case width >= 768:
          return '600px';
        case width >= 425:
          return '500px';
        case width >= 375:
          return '450px';
        default:
          return 'Smaller than 375px';
      }



    // Add more cases here for other image names (e.g., img4, img5, etc.)

    default:
      return 'Unknown image';
  }
};
