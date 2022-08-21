#include < stdio.h >

int main()
{
  int numbers[200], numberSize, i, swap;
  printf("Enter number of elements\n");
  scanf("%d", &numberSize);

  printf("Enter %d of elements\n", numberSize);
  for (i = 0; i < numberSize; i++)
  {
    scanf("%d", &numbers[i]);
  }

  for (i = 0; i < numberSize - 1; i++)
  {
    for (int s = 0; s < numberSize - i - 1; s++)
    {
      if (numbers[s] > numbers[s + 1])
      {
        swap = numbers[s];
        numbers[s] = numbers[s + 1];
        numbers[s + 1] = swap;
      }
    }
  }

  printf("Sorted list in ascending order:\n");
  for (i = 0; i < numberSize; i++)
    printf("%d\n", numbers[i]);

  return 0;
}