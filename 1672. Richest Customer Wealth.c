

int maximumWealth(int **accounts, int accountsSize, int *accountsColSize)
{
  int richestCustomer = 0;
  int amount = 0;
  for (int customer = 0; customer < accountsSize; customer++)
  {
    int sum = 0;
    int totalAmount = 0;
    for (amount = 0; amount < accountsColSize[customer]; amount++)
    {
      sum += *(*(accounts + customer) + amount);
    }
    if (sum > richestCustomer)
      richestCustomer = sum;
  }
  return richestCustomer;
}