var MongoClient = require("mongodb").MongoClient;

var host = "localhost";
var port = 27017;
var database = "myproject";

// Connection URL
var url = `mongodb://${host}:${port}/${database}`;

var insertDocuments = (db, callback) => {
  // Get the documents collection
  var collection = db.collection("documents");
  // Insert some documents
  collection.insertMany([{a: 1}, {a: 2}, {a: 3}], (err, result) => {
    console.log("Inserted 3 documents into the document collection");
    callback(result);
  });
};

var updateDocument = (db, callback) => {
  // Get the documents collection
  var collection = db.collection("documents");
  // Update document where a is 2, set b equal to 1
  collection.updateOne({a: 2}, {$set: {b: 1}}, (err, result) => {
    console.log("Updated the document with the field a equal to 2");
    callback(result);
  });
};

var deleteDocument = (db, callback) => {
  // Get the documents collection
  var collection = db.collection("documents");
  // Insert some documents
  collection.deleteOne({a: 3}, (err, result) => {
    console.log("Removed the document with the field a equal to 3");
    callback(result);
  });
};

var findDocuments = (db, callback) => {
  // Get the documents collection
  var collection = db.collection("documents");
  // Find some documents
  collection.find({}).toArray((err, docs) => {
    console.log("Found the following records");
    console.dir(docs);
    callback(docs);
  });
};

// Use connect method to connect to the Server
MongoClient.connect(url, (err, db) => {
  // console.log(err);
  if (err) {
    console.log(err.message);
  } else {
    console.log("Connected correctly to server");
    insertDocuments(db, () => {
      updateDocument(db, () => {
        deleteDocument(db, () => {
          findDocuments(db, function() {
            db.close();
          });
        });
      });
    });
  }
});
