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
      nextToken
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
        creado
        modificado
      }
      nextToken
    }
  }
`;