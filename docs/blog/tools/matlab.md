# matlab

记录基本的 `matlab` 语法，便于熟悉 `python` 语言的人能够快速熟悉 `matlab`

下面以一个 `python` 脚本转成 `matlab` 脚本演示基本的语法，分支语句，循环语句，数组，绘图和文件读取操作。

::: code-group

```python
import numpy as np
import matplotlib.pyplot as plt

# basic
## IO
a = 1.2
b = 3.2
c = a + b
print(c)
d = int(input('Enter a integer: '))
## for loop
sum = 0
for i in range(1, d + 1):
    sum += i
print(sum)
## if statement
if sum > c:
    print('sum > c')
else:
    print('sum <= c')

# arrays
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
c = a + b
print(c)
d = a @ b
print(d)

# plot
ax1, ax2 = plt.subplot(211), plt.subplot(212)
x = np.linspace(0, 10, 100)
y1 = np.sin(x)
y2 = np.exp(-x)
ax1.plot(x, y1, label='sin(x)')
ax1.plot(x, y2, label='exp(x)')
ax1.set_title('Sine and Exponential Functions')
ax1.set_xlabel('x')
ax1.set_ylabel('y')
ax1.legend()
ax1.grid()

# file operations
x, y = [], []
file = open('data.txt', 'r')
for line in file:
    m, n = line.split(',')
    x.append(float(m))
    y.append(float(n))
file.close()
x, y = np.array(x), np.array(y)
ax2.plot(x, y)
ax2.set_title('Data from file')
ax2.set_xlabel('x')
ax2.set_ylabel('y')
ax2.grid()
plt.show()
```

```matlab
% basic
% IO
a = 1.2;
b = 3.2;
c = a + b;
disp(c);
d = input('Enter an integer: ');

% for loop
sum = 0;
for i = 1:d
    sum = sum + i;
end
disp(sum);

% if statement
if sum > c
    disp('sum > c');
else
    disp('sum <= c');
end

% arrays
a = [1, 2, 3];
b = [4, 5, 6];
c = a + b;
disp(c);
d = dot(a, b);
disp(d);

% plot
x = linspace(0, 10, 100);
y1 = sin(x);
y2 = exp(-x);

% file operations
x = [];
y = [];
fileID = fopen('data.txt', 'r');
while ~feof(fileID)
    line = fgetl(fileID);
    data = str2double(strsplit(line, ','));
    x(end+1) = data(1);
    y(end+1) = data(2);
end
fclose(fileID);

x = x(:); % Convert to column vector
y = y(:); % Convert to column vector

% Updated plot with subplots
figure;
ax1 = subplot(2, 1, 1);
plot(ax1, x, y1, 'DisplayName', 'sin(x)');
hold(ax1, 'on');
plot(ax1, x, y2, 'DisplayName', 'exp(x)');
title(ax1, 'Sine and Exponential Functions');
xlabel(ax1, 'x');
ylabel(ax1, 'y');
legend(ax1);
grid(ax1, 'on');
hold(ax1, 'off');

ax2 = subplot(2, 1, 2);
plot(ax2, x, y);
title(ax2, 'Data from file');
xlabel(ax2, 'x');
ylabel(ax2, 'y');
grid(ax2, 'on');
```

:::
