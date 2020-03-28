#include <iostream>
#include<string.h>
using namespace std;

class car
{
public:
    int id;
    char name[10];
    char *pay;
    int time_hours;
    int is_paid;
    int cars_number;
    car()
    {
        is_paid=0;
        pay=new char[20];
    }


    car &operator =(car c)
    {
        id=c.id;
        time_hours=c.time_hours;
        strcpy(name,c.name);
        return *this;
    }

};
class garage
{
   public:
       int size;
       int *arr;
    private:
    int all_place=size;
    public:
       int empty_place;
       int is_ful;
       car c;
       garage()
       {

       }
   garage(int size)
   {
       arr=new int[size];
       for(int i=0 ; i<size ; i++)
       {
           arr[i]=0;
       }
   }

    void payment_flexibility(char x)
       {
           cout<<"Enter the number of your way for paying:\n";
           cout<<"1-Cash."<<endl<<"2-Credit."<<endl<<"3-Coupon."<<endl;
           switch(x)
           {
           case '1':
              c.pay="Cash";
              break;
           case '2':
              c.pay="Credit.";
              break;
           case '3':
              c.pay="Coupon.";
            break;
           default:
             cout<<"Wrong choice,please again.\n";
           }

       }
   void capacity()
   {
       empty_place=0;
       for(int i=0 ; i<size ; i++)
       {
           if(arr[i]!=0)
           {
               empty_place++;
           }
       }
       cout<<"All Places are 10 , the available are"<<empty_place<<"and You used "<<all_place-empty_place<<endl;
   }


   int prcicing()
   {
      int price=0;
      int hours_pay[]={6,4,3,2,1};
      int counter;
      if(c.time_hours>5)
      {
         for(int i=0; i<5; i++)
          {
              price+=hours_pay[i];
              counter++;
          }

          for(int j=counter ; j<c.time_hours ; j++)
          {
              price+=hours_pay[4];
          }
      }
      else
      {
          for(int i=0; i<c.time_hours; i++)
          {
              price+=hours_pay[i];
          }
      }

      return price;
   }

  void Add_car(car c)
  {
     this->c=c;
     if((all_place-c.cars_number)>=1)
     {
         all_place-=c.cars_number;
         cout<<"OK ,Reserved"<<endl;
     }
     else
        cout<<"NOT Availble"<<endl;
  }
};

int main()
{
    car c1,c2,c3;


    c1.id=1;
    strcpy(c1.name,"Motocycles");
    c1.cars_number=1000;
  garage g1(10);
    c2.id=2;
    strcpy(c2.name,"electric");

     c3.id=3;
     strcpy(c3.name,"handicap");

    g1.Add_car(c1);


    return 0;
}
