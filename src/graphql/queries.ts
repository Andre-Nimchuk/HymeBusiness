import { gql } from '@apollo/client';

import AppSyncClient from '../services/appsync';

export const GET_PROPERTY = gql`
    query getProperty($propertyId: ID!) {
        getProperty(propertyId: $propertyId) {
            propertyId
            location {
                houseNumber
                streetAddress
                city
                state
                zipcode
                country
            }
            createdAt
            updatedAt
            state
            propertyType
            unitType
            numberOfRooms
            numberOfBedrooms
            numberOfBathrooms
            numberOfBalconies
            numberOfFloors
            numberOfParkings
            surfaceArea
            constructionYear
            energyLabel
            notes
            photos {
                id
                file {
                    bucket
                    region
                    key
                }
            }
            tenants {
                user {
                    firstName
                    lastName
                }
                location {
                    houseNumber
                    streetAddress
                    city
                    state
                    zipcode
                    country
                }
                notes
            }
            owner {
                name
                location {
                    houseNumber
                    streetAddress
                    city
                    state
                    zipcode
                    country
                }
                ownerType
                notes
                users {
                    userId
                    firstName
                    lastName
                }
            }
        }
    }
`;

export const GET_MY_PROPERTY = gql`
    query getMyProperty {
        getMyProperty {
            constructionYear
            createdAt
            deleted
            propertyType
            location {
                city
                country
                zipcode
                streetAddress
                state
                houseNumber
                coordinates {
                    lat
                    lng
                }
            }
            numberOfRooms
            numberOfParkings
            numberOfFloors
            numberOfBedrooms
            numberOfBathrooms
            numberOfBalconies
            notes
            energyLabel
            deletedBy
            owner {
                location {
                    houseNumber
                    streetAddress
                    city
                    state
                    zipcode
                    country
                }
                name
                ownerType
            }
            photos {
                file {
                    bucket
                    key
                    region
                }
                id
            }
            state
            rooms {
                description
                floor
                id
                image {
                    file {
                        bucket
                        key
                        region
                    }
                    id
                }
                items {
                    id
                    name
                    notes
                    roomId
                    type
                    images {
                        id
                        file {
                            bucket
                            key
                            region
                        }
                    }
                }
                name
                roomType
            }
            leases {
                createdAt
                leaseId
                checkIn {
                    checkInId
                }
                checkOut {
                    checkOutId
                }
                deposit
                identityVerification {
                    verificationId
                }
                propertyId
                signState
                signing {
                    signDate
                }
                state
                updatedAt
                contract {
                    contractId
                    createdAt
                    state
                    startDate
                    endDate
                    leaseAmount
                    depositAmount
                    payDate
                    payPeriod
                    serviceCost
                    leaseIndex
                    sections {
                        sectionId
                        order
                        title
                        body
                    }
                }
            }
            surfaceArea
            unitType
            updatedAt
        }
    }
`;

export const GET_MY_USER = gql`
    query getMyUser {
        getMyUser {
            userId
            firstName
            lastName
            avatar {
                id
                file {
                    bucket
                    region
                    key
                }
            }
            birthDate
            location {
                city
            }
            description
            phoneNumber
            familySituation
            communications {
                post
                notifications {
                    general
                }
            }
            acceptTerms
            state
            lastSeenAt
        }
    }
`;

export const getMyUser = async () => {
    const result = await AppSyncClient.query({
        query: GET_MY_USER,
        fetchPolicy: 'cache-first',
    }).catch((err) => console.log(err));
    return result;
};
