export const usePrices = (modelos) => {
  let preciosTotal = [];

  const PRECIOS = {
    modelos: {
      metrosCubiertos: {
        unaPlanta: 63000,
        dosPlanta: 86500,
      },
      metrosSemicubiertos: {
        unaPlanta: 51000,
        dosPlanta: 51000,
      },
    },
    cabanas: {
      A: {
        metrosCubiertos: {
          unaPlanta: 76000,
          dosPlanta: 76000,
        },
        metrosSemicubiertos: {
          unaPlanta: 51000,
          dosPlanta: 51000,
        },
      },
      B: {
        metrosCubiertos: {
          unaPlanta: 102000,
          dosPlanta: 102000,
        },
        metrosSemicubiertos: {
          unaPlanta: 51000,
          dosPlanta: 51000,
        },
      },
      C: {
        metrosCubiertos: {
          unaPlanta: 57000,
          dosPlanta: 57000,
        },
        metrosSemicubiertos: {
          unaPlanta: 51000,
          dosPlanta: 51000,
        },
      },
    },
  };

  modelos.forEach((modelo) => {
    let precioTotal;
    let entrega;
    let restoCuotas;
    let precioCuota;

    if (modelo?.tipo === "Cabaña") {
      switch (modelo?.cantidadDePlantas) {
        case 1:
          precioTotal =
            PRECIOS.cabanas[modelo.linea].metrosCubiertos.unaPlanta *
              modelo.superficies.metrosCubiertos +
            modelo.superficies.metrosSemicubiertos *
              PRECIOS.cabanas[modelo.linea].metrosSemicubiertos.unaPlanta;

          entrega = Math.round(precioTotal * modelo.porcentajeDeEntrega);

          restoCuotas = precioTotal - entrega;
          precioCuota = Math.round(restoCuotas / modelo.cantidadDeCuotas);

          preciosTotal.push([entrega, precioCuota]);
          break;

        case 2:
          precioTotal =
            PRECIOS.cabanas[modelo.linea].metrosCubiertos.dosPlanta *
              modelo.superficies.metrosCubiertos +
            modelo.superficies.metrosSemicubiertos *
              PRECIOS.cabanas[modelo.linea].metrosSemicubiertos.dosPlanta;

          entrega = Math.round(precioTotal * modelo.porcentajeDeEntrega);

          restoCuotas = precioTotal - entrega;
          precioCuota = Math.round(restoCuotas / modelo.cantidadDeCuotas);

          preciosTotal.push([entrega, precioCuota]);
          break;

        default:
          break;
      }
    } else if (modelo?.tipo === "modelo") {
      switch (modelo?.cantidadDePlantas) {
        case 1:
          precioTotal =
            PRECIOS.modelos.metrosCubiertos.unaPlanta *
              modelo.superficies.metrosCubiertos +
            modelo.superficies.metrosSemicubiertos *
              PRECIOS.modelos.metrosSemicubiertos.unaPlanta;

          entrega = Math.round(precioTotal * modelo.porcentajeDeEntrega);

          restoCuotas = precioTotal - entrega;
          precioCuota = Math.round(restoCuotas / modelo.cantidadDeCuotas);

          preciosTotal.push([entrega, precioCuota]);
          break;

        case 2:
          precioTotal =
            PRECIOS.modelos.metrosCubiertos.dosPlanta *
              modelo.superficies.metrosCubiertos +
            modelo.superficies.metrosSemicubiertos *
              PRECIOS.modelos.metrosSemicubiertos.dosPlanta;

          entrega = Math.round(precioTotal * modelo.porcentajeDeEntrega);

          restoCuotas = precioTotal - entrega;
          precioCuota = Math.round(restoCuotas / modelo.cantidadDeCuotas);

          preciosTotal.push([entrega, precioCuota]);
          break;

        default:
          break;
      }
    }
  });
  return preciosTotal;
};
