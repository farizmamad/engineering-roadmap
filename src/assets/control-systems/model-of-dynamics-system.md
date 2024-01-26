by [Ahmad Fariz](https://linkedin.com/in/ahmadfariz)

This article refers to the [Control Theory tutorial written by S. Simrock](https://cds.cern.ch/record/1100534/files/p73.pdf) from DESY, Hamburg, Germany.

Model of dynamic systems can be described by differential equations. The key to this approach is "A system of order *n* can be reduced to a set of *n first-order equations*", in which the set of *n first-order equations* are represented in a matrix called *state-space*.

#### Example: A dynamic system consists of spring, mass, and dumper.
Parameters: 
- *k*: spring constant
- *γ*: damping constant
- *u(t)*: force

Quantity of interest:
- *y(t)*: displacement from equilibrium

Differential equation: Newton's third law, (m = 1)
- y''(t) = $\sigma$ F_external = −ky(t) − γy'(t) + u(t)
- y''(t) + γy'(t) + ky(t) = u(t)
- y(0) = y_0
- y'(0) = y'_0

We found out that:
1. Equation is linear
2. Equation is ordinary
3. All coefficients are constant for all *t*

Rearrange the equation:
1. Express the highest-order term (put it in one side).
- y''(t) = $\sigma$ F_external = −ky(t) − γy'(t) + u(t)
2. Synthesize all other terms using integrators.

Before reducing the system of order *n*, kindly understand the theory of *Linear Ordinary differential Equation (LODE)*.

### Linear Ordinary Differential Equation (LODE)
y
(n)
(t) + an−1y
(n−1)(t) + .... + a1y˙(t) + a0y(t) = bmu
(m)
(t) + .... + b1u˙(t) + b0u(t)
m, n positive integers, m ≤ n; coefficients a0, a1, ..., an−1, b0, ...bm real numbers.
Mathematical solution: I hope you know it
Solution of LODE: y(t) = yh(t) + yp(t) .
The solution is the sum of the homogeneous solution yh(t) (natural response) solving 
y
(n)
(t) + an−1y
(n−1)(t) + ... + a1y˙(t) + a0y(t) = 0
and the particular solution yp(t).

