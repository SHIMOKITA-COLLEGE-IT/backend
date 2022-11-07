import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SkillUpdateOneRequiredWithoutProfilesNestedInput } from '../skill/skill-update-one-required-without-profiles-nested.input';
import { MyRootsUpdateOneWithoutProfilesOnSkillsNestedInput } from '../my-roots/my-roots-update-one-without-profiles-on-skills-nested.input';

@InputType()
export class MySkillsUpdateWithoutProfileInput {

    @Field(() => SkillUpdateOneRequiredWithoutProfilesNestedInput, {nullable:true})
    skill?: SkillUpdateOneRequiredWithoutProfilesNestedInput;

    @Field(() => MyRootsUpdateOneWithoutProfilesOnSkillsNestedInput, {nullable:true})
    myRoots?: MyRootsUpdateOneWithoutProfilesOnSkillsNestedInput;
}
