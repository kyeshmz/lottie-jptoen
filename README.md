# Lottie Converter

a simple utility to convert some of the Japanese layers coming out of the After Effects Body Movin plugin to English.

Any layer utilizing color needs to have the color layer changed with an AE in that language and an OS in that language.
This applies anything in CJK Language.

See [this](https://github.com/airbnb/lottie-web/issues/1440) issue for more details.

```
The solution is to rename all gradients "Gradients Fill 1" into Gradient Fill_1, Gradient Fill_2,Gradient Fill_3.... AND ALSO what had closed all still remaining problems after that is to rename all sublayerd Groups from Group 1, Group 2, Group 3 where gradients are presented to Group_1, Group_2, Group_3. This closed my problems.
```
