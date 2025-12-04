#include<stdio.h>
#include<conio.h>
#include<dos.h>
void main(){
    int i;
    clrscr();
    textcolor(RED);
    textbackground(WHITE);
    for(i=1; i<=160; i++){
        cprintf("Happy Diwali \3  ");
        delay(320);
    }
    getch();
}