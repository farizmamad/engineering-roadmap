by [Ahmad Fariz](https://linkedin.com/in/ahmadfariz)

This article refers to the [Control Theory tutorial written by S. Simrock](https://cds.cern.ch/record/1100534/files/p73.pdf) from DESY, Hamburg, Germany.

Control theory is the backbone of the control system design, where the goal is to **achieve better dynamic responses with small errors** by looking at the signal being sampled in time and quantized in amplitude and then apply the control to the feedback systems. The problem of control can be separated to linear control and non-linear control. In **linear control**, the methods presented are **transform** and **state-space**. The **non-linear control** has several well-developed techniques for analyzing the system and for designing the controller that will be discussed.

If we dive into the linear control design methods, the transform methods emphasized are **root-locus method of Evans** and **frequency response**. The state-space methods studied are the **pole assignment technique**, which will be augmented by an **estimator** a.k.a observer and **optimal quadratic-loss control**. The optimal control problems utilized is the steady-state constant gain solution.

The non-linear control is dealing with non-linear systems. Generally speaking, non-linear problems are difficult to solve and less understandable than linear problems. Shortly, the non-linear systems do not follow the superposition principle, may have multiple isolated equilibrium points, and may exhibit properties such as limit-cycle, bifurcation, and chaos. 

The techniques for analyzing non-linear feedback systems presented in this article are: 
* Describing function method
* Phase plane method
* Lyapunov stability analysis
* Singular perturbation method
* Popov criterion (described in The Luré Problem below)
* Centre manifold theorem
* Small-gain theorem
* Passivity analysis

The techniques for designing the control system emphasized in this article are:
* Gain scheduling
* Adaptive control

There are some auxiliary techniques introduced to treat non-linear feedback as linear for the purpose of control design, which are:
* Feedback linearization
* Lyapunov based methods
* Lyapunov redesign
* Back-stepping
* Sliding mode control

