import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MySkillsWhereUniqueInput } from './my-skills-where-unique.input';
import { Type } from 'class-transformer';
import { MySkillsUpdateWithoutMyRootsInput } from './my-skills-update-without-my-roots.input';

@InputType()
export class MySkillsUpdateWithWhereUniqueWithoutMyRootsInput {

    @Field(() => MySkillsWhereUniqueInput, {nullable:false})
    @Type(() => MySkillsWhereUniqueInput)
    where!: MySkillsWhereUniqueInput;

    @Field(() => MySkillsUpdateWithoutMyRootsInput, {nullable:false})
    @Type(() => MySkillsUpdateWithoutMyRootsInput)
    data!: MySkillsUpdateWithoutMyRootsInput;
}
