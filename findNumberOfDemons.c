#include <stdio.h>

// Sample Input:
//       11
//       -1 -1 2 -1 -1 -1 -1 -1 -1 -1 -1
// Sample Output: 8

int main() {
  int event, i;
  printf("Number of events:");
  scanf("%d", &event);

  int list[event];
  printf("Please enter list of numbers\n");

    for(i=0; i<event; i++){
        scanf("%d", &list[i]);
    }
    
    int demons = 0, angel = 0;
    for(i=0; i < event; i++){
      if(list[i] >= 1)angel+=list[i];
      else {
          if(angel){
             angel--;
          } else demons +=1;
      }
    }

    printf("The last %d demons can't be killed", demons);

  return 0;
}