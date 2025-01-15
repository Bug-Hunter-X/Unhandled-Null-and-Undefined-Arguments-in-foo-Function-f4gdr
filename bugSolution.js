function foo(a, b) {
  a = a ?? 0; // Use nullish coalescing to provide default values
  b = b ?? 0;
  // ... rest of the function
  //Now you can safely use 'a' and 'b' without worrying about null or undefined values
} 