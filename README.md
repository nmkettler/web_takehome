
## Architectural  Decisions

I wanted to keep the heavy logic limited inside of the reducer, which is why I did the majority of the field mapping and field logic inside. Due to the small(ish) nature of this project, I thought it would be ok to set it up like this. Otherwise, a separate file for the logic usually helps the readability and maintainability. 

## Problems/Trade Offs

I ran into issues trying to integrate sass (scss) with the current webpack. I could have also gone a styled-component route but those usually get pretty convoluted and messy the more styles that are added. The trade off I made was to use just plain CSS and import each file per component basis. If this were for a large project, I would really push for the setup of scss.

## Summary
Overall, I really enjoyed this exercise. Hope you like the solution!