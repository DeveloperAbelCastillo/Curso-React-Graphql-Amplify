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