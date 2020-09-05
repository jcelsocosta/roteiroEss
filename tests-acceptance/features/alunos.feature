Feature: As a professor
         I want to register students
         So that I can manage their learning goals



Scenario: Registering student with non registered CPF
Given I am at the students page
Given I cannot see a student with CPF "683" in the students list
When I try to register the student "Mari" with CPF "683"
Then I can see "Mari" with CPF "683" in the students list


Scenario: Deleting student registered in system
Given I am at the students page lists
Given I can see student with CPF "5" in the students list
When I try delete student from list "celso" with CPF "5"
Then I cannot see list of student "celso" without CPF "5"
