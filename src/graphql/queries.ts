import { gql } from '@apollo/client';

export const GET_CHARACTERS_QUERY = gql`
    query{
        characters{
            results{
            id
            name
            status
            species
            type
            gender
            origin{
                name
            }
            location{
                name
            }
            image
            episode{
                episode
            }
            created
            }
        }
    }
`;