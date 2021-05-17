/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCategoria = /* GraphQL */ `
  mutation CreateCategoria(
    $input: CreateCategoriaInput!
    $condition: ModelCategoriaConditionInput
  ) {
    createCategoria(input: $input, condition: $condition) {
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
export const updateCategoria = /* GraphQL */ `
  mutation UpdateCategoria(
    $input: UpdateCategoriaInput!
    $condition: ModelCategoriaConditionInput
  ) {
    updateCategoria(input: $input, condition: $condition) {
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
export const deleteCategoria = /* GraphQL */ `
  mutation DeleteCategoria(
    $input: DeleteCategoriaInput!
    $condition: ModelCategoriaConditionInput
  ) {
    deleteCategoria(input: $input, condition: $condition) {
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
export const createCaracteristica = /* GraphQL */ `
  mutation CreateCaracteristica(
    $input: CreateCaracteristicaInput!
    $condition: ModelCaracteristicaConditionInput
  ) {
    createCaracteristica(input: $input, condition: $condition) {
      id
      titulo
      descripcion
      opciones
      creado
      modificado
    }
  }
`;
export const updateCaracteristica = /* GraphQL */ `
  mutation UpdateCaracteristica(
    $input: UpdateCaracteristicaInput!
    $condition: ModelCaracteristicaConditionInput
  ) {
    updateCaracteristica(input: $input, condition: $condition) {
      id
      titulo
      descripcion
      opciones
      creado
      modificado
    }
  }
`;
export const deleteCaracteristica = /* GraphQL */ `
  mutation DeleteCaracteristica(
    $input: DeleteCaracteristicaInput!
    $condition: ModelCaracteristicaConditionInput
  ) {
    deleteCaracteristica(input: $input, condition: $condition) {
      id
      titulo
      descripcion
      opciones
      creado
      modificado
    }
  }
`;
export const createProducto = /* GraphQL */ `
  mutation CreateProducto(
    $input: CreateProductoInput!
    $condition: ModelProductoConditionInput
  ) {
    createProducto(input: $input, condition: $condition) {
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
export const updateProducto = /* GraphQL */ `
  mutation UpdateProducto(
    $input: UpdateProductoInput!
    $condition: ModelProductoConditionInput
  ) {
    updateProducto(input: $input, condition: $condition) {
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
export const deleteProducto = /* GraphQL */ `
  mutation DeleteProducto(
    $input: DeleteProductoInput!
    $condition: ModelProductoConditionInput
  ) {
    deleteProducto(input: $input, condition: $condition) {
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
export const createCaracteristicasProducto = /* GraphQL */ `
  mutation CreateCaracteristicasProducto(
    $input: CreateCaracteristicasProductoInput!
    $condition: ModelCaracteristicasProductoConditionInput
  ) {
    createCaracteristicasProducto(input: $input, condition: $condition) {
      id
      caracteristicaID
      productoID
      caracteristica {
        id
        titulo
        descripcion
        opciones
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
export const updateCaracteristicasProducto = /* GraphQL */ `
  mutation UpdateCaracteristicasProducto(
    $input: UpdateCaracteristicasProductoInput!
    $condition: ModelCaracteristicasProductoConditionInput
  ) {
    updateCaracteristicasProducto(input: $input, condition: $condition) {
      id
      caracteristicaID
      productoID
      caracteristica {
        id
        titulo
        descripcion
        opciones
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
export const deleteCaracteristicasProducto = /* GraphQL */ `
  mutation DeleteCaracteristicasProducto(
    $input: DeleteCaracteristicasProductoInput!
    $condition: ModelCaracteristicasProductoConditionInput
  ) {
    deleteCaracteristicasProducto(input: $input, condition: $condition) {
      id
      caracteristicaID
      productoID
      caracteristica {
        id
        titulo
        descripcion
        opciones
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
