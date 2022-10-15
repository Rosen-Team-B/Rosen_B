# Rosen_B


## Testing

1. Generation of Test Data:
Testing the developed features will require the generation of training and test data. We will be using the Blender rendering engine to generate the data. This will give us more control over what objects are in the water pipeline that the application needs to identify and will simplify testing in the early stages

2. Testing for Accuracy of Machine Learning Model:
We will conduct statistical tests to find the success rate of the application’s in terms of accurately identifying sequences of images where there is anomaly
Testing for accuracy is not automated and will have to be done manually unless we can implement/develop an automated feature for tracking


3. Testing Functionality of Software

Since for the preliminary version of the application we are using pre-existing refined algorithms like vgg16, there is little scope for testing on the backend, other than ensuring the implementation is correct
Testing at this phase of development will be limited to troubleshooting the interface as we develop a basic front end that will implement the algorithm we are using
Using REST for tesiting the API
Regression testing to make sure new features do not break old code


4. Performance Testing (Tentative) 
Since the intended use for the application involves working with large amounts of data, load and stress testing will be conducted to find the failure point.

*** If performance is not satisfactory or upto client’s standards by these metrics we will investigate more machine learning techniques and algorithms to integrate into the system.
