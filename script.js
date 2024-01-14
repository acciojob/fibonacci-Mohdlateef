function fibonacci(num) {
// your code here
	int prev=0
	let next=1;
	let sum=0;
	
	for(int i=1;i<num;i++)
	{
		sum=next+prev;
		prev=next;
		next=sum;

		
	}
	return sum;
}

module.exports = fibonacci;
