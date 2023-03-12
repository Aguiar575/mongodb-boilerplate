//to update a existing collection use: 
//db.runCommand({collMod: "posts", validaror: {}}
db.createCollection("posts",
    {
        validator: {
            $jsonSchema: {
                bsonType: "object", required: [
                    "title",
                    "text",
                    "creator",
                    "comments"
                ], properties: {
                    title: {
                        bsonType: "string",
                        description: "must be an string and is required"
                    },
                    text: {
                        bsonType: "string",
                        description: "must be an string and is required"
                    },
                    creator: {
                        bsonType: "objectId",
                        description: "must be an objectId  and is required"
                    },
                    Comments: {
                        bsonType: "array",
                        description: "must be a array and is required",
                        items: {
                            bsonType: "object",
                            required: ["author", "text"],
                            properties: {
                                text: {
                                    bsonType: "string",
                                    description: "must be an string and is required"
                                },
                                author: {
                                    bsonType: "objectId",
                                    description: "must be an objectId  and is required"
                                },
                            }
                        }
                    },
                }
            }
        },
        validationAction: "warn"
    })