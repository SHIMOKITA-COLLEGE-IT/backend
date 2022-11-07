import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MySkillsCreateWithoutSkillInput } from './my-skills-create-without-skill.input';
import { Type } from 'class-transformer';
import { MySkillsCreateOrConnectWithoutSkillInput } from './my-skills-create-or-connect-without-skill.input';
import { MySkillsCreateManySkillInputEnvelope } from './my-skills-create-many-skill-input-envelope.input';
import { MySkillsWhereUniqueInput } from './my-skills-where-unique.input';

@InputType()
export class MySkillsCreateNestedManyWithoutSkillInput {

    @Field(() => [MySkillsCreateWithoutSkillInput], {nullable:true})
    @Type(() => MySkillsCreateWithoutSkillInput)
    create?: Array<MySkillsCreateWithoutSkillInput>;

    @Field(() => [MySkillsCreateOrConnectWithoutSkillInput], {nullable:true})
    @Type(() => MySkillsCreateOrConnectWithoutSkillInput)
    connectOrCreate?: Array<MySkillsCreateOrConnectWithoutSkillInput>;

    @Field(() => MySkillsCreateManySkillInputEnvelope, {nullable:true})
    @Type(() => MySkillsCreateManySkillInputEnvelope)
    createMany?: MySkillsCreateManySkillInputEnvelope;

    @Field(() => [MySkillsWhereUniqueInput], {nullable:true})
    @Type(() => MySkillsWhereUniqueInput)
    connect?: Array<MySkillsWhereUniqueInput>;
}
