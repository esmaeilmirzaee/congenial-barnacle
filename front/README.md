## How to connect to mongo container and insert data

```bash
docker pull mongo:4.4

// without authentication
docker run -d --name mongo -p 2717:27017 -v ~/path/to/data/mongo/:/data/db/ mongo:4.4.3

// to supply authentication
docker exec -it mongo bash

use db_name
db.createUser({
  user:'sam',
  pwd:'secretPassword',
  roles: [{role: 'readWrite', db: 'db_name'}]
})

exit

docker stop mongo

docker run -d -p 2717:27017 -v ~/path/to/data/mongo/:/data/db/ mongo mongod --auth

mongosh 127.0.0.1:2717/db_name -u sam -p secretPassword
```

# Colours

const kPrimaryColour = #366CF6
const kSecondaryColour = #F5F6FC
const kBgLightColour = #F2F4FC
const kBgDarkColour = #EBEDFA
const kBadgeColour = #EE376E
const kGrayColour = #8793B2
const kTitleTextColour = #30384D
const kTextColour = #4D5875

> Colour

#333541
#383A47
#454757
#3D3F4F
#525466
#414354

linear-gradient(91.49deg, #454757 0%, #3D3F4F 100%)
linear-gradient(104.88deg, #525466 0%, #414354 100%)

> Colour constants for flutter

const kPrimaryColor = Color(0xFF366CF6);
const kSecondaryColor = Color(0xFFF5F6FC);
const kBgLightColor = Color(0xFFF2F4FC);
const kBgDarkColor = Color(0xFFEBEDFA);
const kBadgeColor = Color(0xFFEE376E);
const kGrayColor = Color(0xFF8793B2);
const kTitleTextColor = Color(0xFF30384D);
const kTextColor = Color(0xFF4D5875);
