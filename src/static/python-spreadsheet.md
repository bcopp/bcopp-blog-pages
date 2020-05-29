# PySpread

Lets create a simple spreasheet program...

This was the first live coding question I had recieved *out in the wild* and to my dismay I flubbed the question.

Initially it seemed simple enough, create a 2D array to hold all the possible values, throw that array in a class with getter and setter methods, write a pretty print method, and code it all up in the span of 30 minutes. 

However, this was sparsly what happened. My nerves flaired up and the resulting anxiety caused a seriouse flub in programatic decision making... I struggled with the somewhat complex pretty print method and even stuttered initializing a 2D array.

The mental defeat and its resulting rejection from the organization caused me to become obessed with the problem. I solved it on my own time... then added optimizations, then solved it with a functional paradime. The theory spiraled out control and I ended up using monads as my data containers. It didnt stop there though, i eventually wrote a Finite State Machine and caching algorithem for my spreadsheet program...

Here was where my journey began.

## A Simple Program and Several Decisions

Simpily put a spreadsheet manages values and provides useful operations to print, set, remove, and combine and these values into more or less values.

### Datastructure
Two main datastructres can be chosen to organize our data. A 2D array or a dictonary object.

For sparse matrixs a dictionary the best choice. We only store the values we need and have a O(1) lookup time for XY coordinates.

We can store or data as *primatives* and gain space effiecney, however such a limitation does not allow for complex object interaction (such as fractions). Also, storing values can also make mutations within iterative loops complicated. We decide to use objects.

To wrap our data and its associated operations together we create a class Spreadsheet class. This should provide a good layer of abstraction to our implementation.


### Indexing/Operators
Python supports tuple hasing out of the box. This means we will use a single hasmap with our lookup keys being XY tuples.
```python
class Spread:
  def __init__(self):
		self.cells = {}
```

Our basic operators are as follows:
```python
def remove(XY) -> bool:
	...
def set(XY, value) -> bool:
	...
def derive(XY1, XY2, XY_destination, operator: lambda ) -> bool:
  ...
```
Without making this 'simple spreadsheet' too complex we will leave the operators structure data as is. Each of these functions modifies their associated spreadsheet and returns a boolen dependent on the success of the operation. The derive function takes 3 arguments, the XY's of the source Cells, a destination XY, and the operation it would use to dervive a new value.

We also define an internal method to make selecing easy
```python
def _select(XY) -> Cell | Bool:
	...
```

The output of our pretty print method should look like this for a 4x2 matrix:
```
5  |5||10
100| ||  
```
In a simple fasion we will keep a dictionary of max element lengths based on column and update this counter as we add/remove elements.


With this description the Spreadsheet is all but completed... but... but what if we want operations on multiple cells to derive into a single cell. What if we want to have multiple spreadsheets that interact with eachother. Perhaps we want to save out operations as object so that they can be reused? What if a chain of operations depend on eachother, and one of the components change, do we have to recalculate the entire derivation?

These questions will be answered in future articles, thanks for reading!

