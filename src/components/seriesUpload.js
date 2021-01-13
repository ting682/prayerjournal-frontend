import { Form } from "react-bootstrap"
import FormFileInput from "react-bootstrap/esm/FormFileInput"
import S3FileUpload from 'react-s3'
import imageCompression from 'browser-image-compression'

const config = {
    bucketName: process.env.REACT_APP_AWS_BUCKET_NAME,
    dirName: process.env.REACT_APP_AWS_BUCKET_DIRECTORY_NAME,
    region: 'us-east-1',
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
}

export const SeriesUpload = (props) => {


    const handleUpload = async (event) => {
        
        const imageFile = event.target.files[0];
        console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
        console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);
        
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 300,
            useWebWorker: true
        }
        try {
            const compressedFile = await imageCompression(imageFile, options);
            console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
            console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
        
            S3FileUpload.uploadFile(compressedFile, config)
                .then(data => console.log(data))
                .catch(err => console.error(err)) // write your own logic
        } catch (error) {
            console.log(error);
        }

        
    }

    return (
        <Form >
            <FormFileInput onChange={handleUpload}></FormFileInput>
        </Form>
    )
}