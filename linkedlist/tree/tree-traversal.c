#include <stdio.h>
#include <stdlib.h>
struct node {
   char value;
   struct node* left;
   struct node* right;
};
// Inorder traversal
void InOrder(struct node* root) {
   if (root == NULL) return;
   InOrder(root->left);
   printf("%c ", root->value);
   InOrder(root->right);
}
// PreOrder traversal
void PreOrder(struct node* root) {
  if (root == NULL) return;
  printf("%c ", root->value);
  PreOrder(root->left);
  PreOrder(root->right);
}
// PostOrder traversal
void PostOrder(struct node* root) {
  if (root == NULL) return;
  PostOrder(root->left);
  PostOrder(root->right);
  printf("%c ", root->value);
}
// Create a new Node
struct node* createNode(int value) {
  struct node* newNode = malloc(sizeof(struct node));
  newNode->value = value;
  newNode->left = NULL;
  newNode->right = NULL;
  return newNode;
}
int main() {
  struct node* root = createNode('F');
  root->left = createNode('B');
  root->right = createNode('G');

  root->left->left = createNode('A');
  root->left->right = createNode('D');

  root->left->right->left = createNode('C');
  root->left->right->right = createNode('E');

  root->right->left = createNode('I');
  root->right->left->right = createNode('H');
  printf("Inorder traversal:\n");
  InOrder(root);
  printf("\nPreOrder traversal:\n");
  PreOrder(root);
  printf("\nPostOrder traversal:\n");
  PostOrder(root);
}