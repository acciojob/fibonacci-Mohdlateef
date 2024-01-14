function fibonacci(num) {
// your code here
	let prev=0
	let next=1;
	let sum=0;
	
	for(let i=1;i<num;i++)
	{
		sum=next+prev;
		prev=next;
		next=sum;

		
	}
	return sum;
}

module.exports = fibonacci;
