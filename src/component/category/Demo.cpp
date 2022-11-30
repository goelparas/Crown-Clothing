# include<iostream>
using namespace std;

class COLLEGE{

private:

int houseIncome;
int length = 9;


public:
int ID;


 void  show()
 {
    cout<<ID ;

 }

protected :
void color()
{
    cout<<  "This is nigga"<< endl;

}
};

class Student: protected COLLEGE{


public:

void show()
{
cout<<" this is the id of the Student College" <<ID<<endl;
color();
}

};

class AccountOffice: public Student{


public:
void show()
{
    cout<< " fee pending of student"<< ID<<endl;
    color();

}
};



int main()
{

Student Paras  = Student();

Paras.show();


// Paras.ID = 1000;
// cout<< Paras.ID;


    return  0;

}