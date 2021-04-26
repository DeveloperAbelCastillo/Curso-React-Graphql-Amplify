/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategoria = /* GraphQL */ `
  subscription OnCreateCategoria {
    onCreateCategoria {
      id
      titulo
      categoriaPadreID
      subCategorias {
        items {
          id
          titulo
          categoriaPadreID
          creado
          modificado
        }
        nextToken
      }
      categoriaPadre {
        id
        titulo
        categoriaPadreID
        subCategorias {
          nextToken
        }
        categoriaPadre {
          id
          titulo
          categoriaPadreID
          creado
          modificado
        }
        creado
        modificado
      }
      creado
      modificado
    }
  }
`;
export const onUpdateCategoria = /* GraphQL */ `
  subscription OnUpdateCategoria {
    onUpdateCategoria {
      id
      titulo
      categoriaPadreID
      subCategorias {
        items {
          id
          titulo
          categoriaPadreID
          creado
          modificado
        }
        nextToken
      }
      categoriaPadre {
        id
        titulo
        categoriaPadreID
        subCategorias {
          nextToken
        }
        categoriaPadre {
          id
          titulo
          categoriaPadreID
          creado
          modificado
        }
        creado
        modificado
      }
      creado
      modificado
    }
  }
`;
export const onDeleteCategoria = /* GraphQL */ `
  subscription OnDeleteCategoria {
    onDeleteCategoria {
      id
      titulo
      categoriaPadreID
      subCategorias {
        items {
          id
          titulo
          categoriaPadreID
          creado
          modificado
        }
        nextToken
      }
      categoriaPadre {
        id
        titulo
        categoriaPadreID
        subCategorias {
          nextToken
        }
        categoriaPadre {
          id
          titulo
          categoriaPadreID
          creado
          modificado
        }
        creado
        modificado
      }
      creado
      modificado
    }
  }
`;
export const onCreateCaracteristica = /* GraphQL */ `
  subscription OnCreateCaracteristica {
    onCreateCaracteristica {
      id
      titulo
      descripcion
      caracteristicaPadreID
      subCaracteristicas {
        items {
          id
          titulo
          descripcion
          caracteristicaPadreID
          creado
          modificado
        }
        nextToken
      }
      caracteristicaPadre {
        id
        titulo
        descripcion
        caracteristicaPadreID
        subCaracteristicas {
          nextToken
        }
        caracteristicaPadre {
          id
          titulo
          descripcion
          caracteristicaPadreID
          creado
          modificado
        }
        productos {
          nextToken
        }
        creado
        modificado
      }
      productos {
        items {
          id
          caracteristicaID
          productoID
          creado
          modificado
        }
        nextToken
      }
      creado
      modificado
    }
  }
`;
export const onUpdateCaracteristica = /* GraphQL */ `
  subscription OnUpdateCaracteristica {
    onUpdateCaracteristica {
      id
      titulo
      descripcion
      caracteristicaPadreID
      subCaracteristicas {
        items {
          id
          titulo
          descripcion
          caracteristicaPadreID
          creado
          modificado
        }
        nextToken
      }
      caracteristicaPadre {
        id
        titulo
        descripcion
        caracteristicaPadreID
        subCaracteristicas {
          nextToken
        }
        caracteristicaPadre {
          id
          titulo
          descripcion
          caracteristicaPadreID
          creado
          modificado
        }
        productos {
          nextToken
        }
        creado
        modificado
      }
      productos {
        items {
          id
          caracteristicaID
          productoID
          creado
          modificado
        }
        nextToken
      }
      creado
      modificado
    }
  }
`;
export const onDeleteCaracteristica = /* GraphQL */ `
  subscription OnDeleteCaracteristica {
    onDeleteCaracteristica {
      id
      titulo
      descripcion
      caracteristicaPadreID
      subCaracteristicas {
        items {
          id
          titulo
          descripcion
          caracteristicaPadreID
          creado
          modificado
        }
        nextToken
      }
      caracteristicaPadre {
        id
        titulo
        descripcion
        caracteristicaPadreID
        subCaracteristicas {
          nextToken
        }
        caracteristicaPadre {
          id
          titulo
          descripcion
          caracteristicaPadreID
          creado
          modificado
        }
        productos {
          nextToken
        }
        creado
        modificado
      }
      productos {
        items {
          id
          caracteristicaID
          productoID
          creado
          modificado
        }
        nextToken
      }
      creado
      modificado
    }
  }
`;
export const onCreateProducto = /* GraphQL */ `
  subscription OnCreateProducto {
    onCreateProducto {
      id
      titulo
      descripcion
      categoriaID
      categoria {
        id
        titulo
        categoriaPadreID
        subCategorias {
          nextToken
        }
        categoriaPadre {
          id
          titulo
          categoriaPadreID
          creado
          modificado
        }
        creado
        modificado
      }
      caracteristicas {
        items {
          id
          caracteristicaID
          productoID
          creado
          modificado
        }
        nextToken
      }
      creado
      modificado
    }
  }
`;
export const onUpdateProducto = /* GraphQL */ `
  subscription OnUpdateProducto {
    onUpdateProducto {
      id
      titulo
      descripcion
      categoriaID
      categoria {
        id
        titulo
        categoriaPadreID
        subCategorias {
          nextToken
        }
        categoriaPadre {
          id
          titulo
          categoriaPadreID
          creado
          modificado
        }
        creado
        modificado
      }
      caracteristicas {
        items {
          id
          caracteristicaID
          productoID
          creado
          modificado
        }
        nextToken
      }
      creado
      modificado
    }
  }
`;
export const onDeleteProducto = /* GraphQL */ `
  subscription OnDeleteProducto {
    onDeleteProducto {
      id
      titulo
      descripcion
      categoriaID
      categoria {
        id
        titulo
        categoriaPadreID
        subCategorias {
          nextToken
        }
        categoriaPadre {
          id
          titulo
          categoriaPadreID
          creado
          modificado
        }
        creado
        modificado
      }
      caracteristicas {
        items {
          id
          caracteristicaID
          productoID
          creado
          modificado
        }
        nextToken
      }
      creado
      modificado
    }
  }
`;
export const onCreateCaracteristicasProducto = /* GraphQL */ `
  subscription OnCreateCaracteristicasProducto {
    onCreateCaracteristicasProducto {
      id
      caracteristicaID
      productoID
      caracteristica {
        id
        titulo
        descripcion
        caracteristicaPadreID
        subCaracteristicas {
          nextToken
        }
        caracteristicaPadre {
          id
          titulo
          descripcion
          caracteristicaPadreID
          creado
          modificado
        }
        productos {
          nextToken
        }
        creado
        modificado
      }
      producto {
        id
        titulo
        descripcion
        categoriaID
        categoria {
          id
          titulo
          categoriaPadreID
          creado
          modificado
        }
        caracteristicas {
          nextToken
        }
        creado
        modificado
      }
      creado
      modificado
    }
  }
`;
export const onUpdateCaracteristicasProducto = /* GraphQL */ `
  subscription OnUpdateCaracteristicasProducto {
    onUpdateCaracteristicasProducto {
      id
      caracteristicaID
      productoID
      caracteristica {
        id
        titulo
        descripcion
        caracteristicaPadreID
        subCaracteristicas {
          nextToken
        }
        caracteristicaPadre {
          id
          titulo
          descripcion
          caracteristicaPadreID
          creado
          modificado
        }
        productos {
          nextToken
        }
        creado
        modificado
      }
      producto {
        id
        titulo
        descripcion
        categoriaID
        categoria {
          id
          titulo
          categoriaPadreID
          creado
          modificado
        }
        caracteristicas {
          nextToken
        }
        creado
        modificado
      }
      creado
      modificado
    }
  }
`;
export const onDeleteCaracteristicasProducto = /* GraphQL */ `
  subscription OnDeleteCaracteristicasProducto {
    onDeleteCaracteristicasProducto {
      id
      caracteristicaID
      productoID
      caracteristica {
        id
        titulo
        descripcion
        caracteristicaPadreID
        subCaracteristicas {
          nextToken
        }
        caracteristicaPadre {
          id
          titulo
          descripcion
          caracteristicaPadreID
          creado
          modificado
        }
        productos {
          nextToken
        }
        creado
        modificado
      }
      producto {
        id
        titulo
        descripcion
        categoriaID
        categoria {
          id
          titulo
          categoriaPadreID
          creado
          modificado
        }
        caracteristicas {
          nextToken
        }
        creado
        modificado
      }
      creado
      modificado
    }
  }
`;
