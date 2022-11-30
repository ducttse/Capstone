const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");

let client = new S3Client({
	region: "us-east-1",
	credentials: {
		accessKeyId: process.env.REACT_APP_AWS_S3_ACCESS_KEY,
		secretAccessKey: process.env.REACT_APP_AWS_S3_SECRET_KEY
	}
});
