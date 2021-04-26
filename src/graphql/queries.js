/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategoria = /* GraphQL */ `
  query GetCategoria($id: ID!) {
    getCategoria(id: $id) {
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
export const listCategorias = /* GraphQL */ `
  query ListCategorias(
    $filter: ModelCategoriaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorias(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCaracteristica = /* GraphQL */ `
  query GetCaracteristica($id: ID!) {
    getCaracteristica(id: $id) {
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
export const listCaracteristicas = /* GraphQL */ `
  query ListCaracteristicas(
    $filter: ModelCaracteristicaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCaracteristicas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getProducto = /* GraphQL */ `
  query GetProducto($id: ID!) {
    getProducto(id: $id) {
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
export const listProductos = /* GraphQL */ `
  query ListProductos(
    $filter: ModelProductoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCaracteristicasProducto = /* GraphQL */ `
  query GetCaracteristicasProducto($id: ID!) {
    getCaracteristicasProducto(id: $id) {
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
export const listCaracteristicasProductos = /* GraphQL */ `
  query ListCaracteristicasProductos(
    $filter: ModelCaracteristicasProductoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCaracteristicasProductos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        caracteristicaID
        productoID
        caracteristica {
          id
          titulo
          descripcion
          caracteristicaPadreID
          creado
          modificado
        }
        producto {
          id
          titulo
          descripcion
          categoriaID
          creado
          modificado
        }
        creado
        modificado
      }
      nextToken
    }
  }
`;
