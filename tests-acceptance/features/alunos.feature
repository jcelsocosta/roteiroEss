Feature: As a professor
         I want to register students
         So that I can manage their learning goals



Scenario: Deleting student registered in system
Given I am at the students page lists
Given I can see student with CPF "5" in the students list
When I try delete student from list "celso" with CPF "5"
Then I cannot see list of student "celso" without CPF "5"
