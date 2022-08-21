#include <stdio.h>

int main()
{
  int numbers[200], numberSize, i, search;
  printf("Enter number of elements\n");
  scanf("%d", &numberSize);

  printf("Enter %d of elements\n", numberSize);
  for (i = 0; i < numberSize; i++)
  {
    scanf("%d", &numbers[i]);
  }

  printf("Enter a number to search\n");
  scanf("%d", &search);

  for (i = 0; i < numberSize; i++)
  {
    int element = numbers[i];
    if (element == search)
    {
      printf("Item is found at address %d", i);
      return 0;
    }
  }

  printf("Item is not found.");
  return 0;
}