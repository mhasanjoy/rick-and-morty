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

export const GET_LOCATIONS_QUERY = gql`
    query{
        locations{
            results{
            id
            name
            type
            dimension
            residents{
                name
            }
            created
            }
        }
    }
`;

export const GET_EPISODES_QUERY = gql`
    query{
        episodes{
            results{
            id
            name
            air_date
            episode
            characters{
                name
            }
            created
            }
        }
    }
`;