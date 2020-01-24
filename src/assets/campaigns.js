const CAMPAIGNS_MOCKUP_DATA = [
    // {
    //     id: 1,
    //     name: 'Election 1',
    //     imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
    //     createdOn: '01/01/2020'
    // },
    // {
    //     id: 2,
    //     name: 'Election 2',
    //     imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
    //     createdOn: '02/01/2020'
    // },
    // {
    //     id: 3,
    //     name: 'Election 3',
    //     imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
    //     createdOn: '03/01/2020'
    // },
    // {
    //     id: 4,
    //     name: 'Election 4',
    //     imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
    //     createdOn: '04/01/2020'
    // },
    // {
    //     id: 5,
    //     name: 'Election 5',
    //     imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
    //     createdOn: '05/01/2020'
    // },
    // {
    //     id: 6,
    //     name: 'Election 6',
    //     imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
    //     createdOn: '06/01/2020'
    // },
    // {
    //     id: 7,
    //     name: 'Election 7',
    //     imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
    //     createdOn: '07/01/2020'
    // },
    // {
    //     id: 8,
    //     name: 'Election 8',
    //     imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
    //     createdOn: '08/01/2020'
    // },
    // {
    //     id: 9,
    //     name: 'Election 9',
    //     imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
    //     createdOn: '09/01/2020'
    // }
    {
        "id": "1",
        "credentials": [],
        "email": "test@gmail.com",
        "username": "Test",
        "password": "Password1",
        "extras": [],
        "campaigns": [
          {
            "id": "1",
            "name": "Campaign 1",
            "createdOn": "12/12/2020",
            "description": "Lorem ipsum dolor sit amet",
            "imageUrl": "https://i.ibb.co/X2VJP2W/blue-snapback.png",
            "candidates": [
              {
                "id": "1",
                "firstName": "Candidate 1",
                "lastName": "CD 1",
                "description": "Excepteur sint occaecat cupidatat non proident",
                "imageUrl": "https://i.ibb.co/ZYW3VTp/brown-brim.png",
                "extras": []
              },
              {
                "id": "2",
                "firstName": "Candidate 2",
                "lastName": "CD 2",
                "description": "Excepteur sint occaecat cupidatat non proident",
                "imageUrl": "https://i.ibb.co/ypkgK0X/blue-beanie.png",
                "extras": []
              },
              {
                "id": "3",
                "firstName": "Candidate 3",
                "lastName": "CD 3",
                "description": "Excepteur sint occaecat cupidatat non proident",
                "imageUrl": "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
                "extras": []
              },
              {
                "id": "4",
                "firstName": "Candidate 4",
                "lastName": "CD 4",
                "description": "Excepteur sint occaecat cupidatat non proident",
                "imageUrl": "https://i.ibb.co/RjBLWxB/grey-brim.png",
                "extras": []
              }
            ],
            "voters": [
              {
                "id": "1",
                "credentialsPath": "https://voters-credentials-path.com"
              },
              {
                "id": "2",
                "credentialsPath": "https://voters-credentials-path.com"
              },
              {
                "id": "3",
                "credentialsPath": "https://voters-credentials-path.com"
              },
              {
                "id": "4",
                "credentialsPath": "https://voters-credentials-path.com"
              }
            ]
          },
          {
            "id": "2",
            "name": "Campaign 2",
            "createdOn": "12/12/2020",
            "description": "Lorem ipsum dolor sit amet",
            "imageUrl": "https://i.ibb.co/YTjW3vF/green-beanie.png",
            "candidates": [
              {
                "id": "1",
                "firstName": "Candidate 1",
                "lastName": "CD 1",
                "description": "Excepteur sint occaecat cupidatat non proident",
                "imageUrl": "https://i.ibb.co/YTjW3vF/green-beanie.png",
                "extras": []
              },
              {
                "id": "2",
                "firstName": "Candidate 2",
                "lastName": "CD 2",
                "description": "Excepteur sint occaecat cupidatat non proident",
                "imageUrl": "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
                "extras": []
              },
              {
                "id": "3",
                "firstName": "Candidate 3",
                "lastName": "CD 3",
                "description": "Excepteur sint occaecat cupidatat non proident",
                "imageUrl": "https://i.ibb.co/bLB646Z/red-beanie.png",
                "extras": []
              },
              {
                "id": "4",
                "firstName": "Candidate 4",
                "lastName": "CD 4",
                "description": "Excepteur sint occaecat cupidatat non proident",
                "imageUrl": "https://i.ibb.co/1f2nWMM/wolf-cap.png",
                "extras": []
              }
            ],
            "voters": [
              {
                "id": "1",
                "credentialsPath": "https://voters-credentials-path.com"
              },
              {
                "id": "2",
                "credentialsPath": "https://voters-credentials-path.com"
              },
              {
                "id": "3",
                "credentialsPath": "https://voters-credentials-path.com"
              },
              {
                "id": "4",
                "credentialsPath": "https://voters-credentials-path.com"
              }
            ]
          }
        ]
      }
]

export default CAMPAIGNS_MOCKUP_DATA;
