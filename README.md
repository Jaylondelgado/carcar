# CarCar

Team:

* Person 1 - Which microservice?
Jaylon Delgado microservice - service
* Person 2 - Which microservice?
Jarett Tan microservice - sales

## Design

## Service microservice

I will add the services into the inventory microservice and
make my models and views to show the list of my model. I will write 
the paths to my views and check my work on Insomnia. I will add to 
my views to handle POST, GET, PUT, and DELETE requests for all services.
That will complete my back end. Next I will start on the front-end by polling for 
the automobiles for the vin. Then I will begin creating my React files 
and building my React components to fetch and show the lists and complete 
the forms. After I will implement the d-none for my finished projects. 
Then I will work on the search bar for the service history. My two biggest
struggles were implementing the appointment form on react and also
creating the search bar with search history. I do however believe 
I learned a lot throughout this project, I came in not knowing what to do
with certain errors and I was able to overcome that and began fixing the problem
realitvely quick. 


## Sales microservice



Sales microservice will record a salesperson vehicle sales with vehicles that are created in the invetory. Sales Microservice has models Sales, SalesPerson, Customer where the Sales model polls for data from invetory microservice to create a Sale that tracks salespersons sales. SalesPerson model creates sales_person instances with fields name, employee_number. Customer models creates potential customer instances with fields name,address,phone_number.Sales models also has a foreign key to customer and salesperson that selects existings salesperson and potential customers to select from with a sold price of a vehicle from invetory. My biggest struggles were implenting the react forms for the create/list view. It was a struggle getting the history list as well as I had to create a dropdown for salesperson instances and displays the sales for the sales person instance. I was able to learn a lot throughout this project with getting a little more comfortable with the front-end side of things. 
